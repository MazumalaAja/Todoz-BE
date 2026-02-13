// Imports
const mongoose = require("mongoose");
const { hashData } = require("../../utils/bcrypt");
const validator = require("validator");

// My-code
const usersModel = new mongoose.Schema({
     username: {
          type: String,
          required: [true, "The name column must be filled in"],
          trim: true,
          minLength: [5, "Minimum name length is 5 characters"],
     },
     email: {
          type: String,
          required: [true, "The email column must be filled in"],
          unique: [true, "email already exist or has been used"],
          trim: true,
          validate: [validator.isEmail, "Invalid Email"],
     },
     password: {
          type: String,
          required: [true, "The password column must be filled in"],
          minLength: [6, "Minimum password length is 6 characters"],
     },
     role: {
          type: String,
          enum: ["USER", "ADMIN"],
          default: "USER"
     },
     is_Active: {
          type: Boolean,
          default: false
     }
}, {
     timestamps: true
});

// Pre Save
usersModel.pre("save", async function () {
     if (!this.isModified("password")) return;
     this.password = await hashData(this.password);
});

// Exports
module.exports = mongoose.model("User", usersModel);