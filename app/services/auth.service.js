// Imports
const usersModel = require("../api/models/users.model");
const verificationsModel = require("../api/models/verifications.model");
const { BadRequest, Conflict } = require("../errors");
const { compareData } = require("../utils/bcrypt");
const generateOTP = require("../utils/generateOtp");
const { createToken } = require("../utils/jsonwebtoken");
const { sendEmail } = require("../utils/nodemailer");

// My-code
const authService = {
     // create user / register
     insert: async (req) => {
          // Request Body
          const { username, email, password, password_confirmation } = req.body;
          const dataUser = { username, email, password }

          // Validation
          if (!username || !email || !password || !password_confirmation) throw new BadRequest("all columns are required to be filled in");
          if (password !== password_confirmation) throw new BadRequest("Password confirmation doesn't match");
          const userExist = await usersModel.findOne({ email });
          if (userExist) throw new Conflict("Email already exist or has been used");

          // New User
          const newUser = await usersModel.create(dataUser);

          // Generate OTP 
          const OTP = generateOTP();
          await verificationsModel.create({
               user_email: email,
               purpose: "registration",
               otp_hash: OTP,
               expiresAt: new Date(Date.now() + (1000 * 60 * 5))
          })

          // Genarate Token
          const token = createToken({
               id: Date.now(),
               username: newUser.username,
               email: newUser.email
          })

          // Send OTP
          await sendEmail(email, OTP);

          return { data: newUser, token };
     },
     compare: async (req) => {
          // Request body
          const { email, password } = req.body;
          const user = await usersModel.findOne({ email });

          // Validation
          if (!email || !password) throw new BadRequest("all columns are required to be filled in");
          if (!user) throw new BadRequest("Email doesn't exist or is not registered");
          if (!await compareData(password, user.password)) throw new BadRequest("Login failed");

          // Genarate Token
          const token = createToken({
               id: Date.now(),
               username: user.username,
               email: user.email
          })

          return { token }
     }
}

// Exports
module.exports = { authService }