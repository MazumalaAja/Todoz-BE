// Imports
const mongoose = require("mongoose");
const { hashData } = require("../../utils/bcrypt");
const { Schema, model } = mongoose;

// My-code
const verificationModel = new Schema({
     user_email: {
          type: String,
          required: true,
          index: true,
     },
     purpose: {
          type: String,
          enum: ["registration", "forgot_password"],
          default: "registration"
     },
     otp_hash: {
          type: String,
          required: true,
     },
     expiresAt: {
          type: Date,
          required: true,
          index: { expires: 0 }
     },
     attempts: {
          type: Number,
          default: 0
     },
     is_used: {
          type: Boolean,
          default: false
     }
}, { timestamps: true });

// Pre-Save
verificationModel.pre("save", async function () {
     if (!this.isModified("otp_hash")) return;
     this.otp_hash = await hashData(this.otp_hash);
})

// Exports
module.exports = model("Verification", verificationModel);