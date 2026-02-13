// Imports
const nodemailer = require("nodemailer");
const { GMAIL, APP_PASS_GMAIL } = require("../config");

// My-code
const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
          user: GMAIL,
          pass: APP_PASS_GMAIL
     }
})

function templateHTML(otp) {
     return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todoz - OTP Verification</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f9fafb; /* Vercel Light Gray */
      font-family: 'Inter', sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #000000, #111827); /* Vercel Black */
      padding: 32px;
      text-align: center;
      color: #ffffff;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .content {
      padding: 32px;
      color: #111827;
      line-height: 1.6;
    }

    .content h2 {
      margin-top: 0;
      font-size: 22px;
      font-weight: 600;
    }

    .content p {
      font-size: 15px;
      color: #374151; /* Gray-700 */
      margin: 12px 0;
    }

    .otp-box {
      margin: 28px 0;
      text-align: center;
    }

    .otp {
      display: inline-block;
      background: #000000;
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 6px;
      padding: 14px 28px;
      border-radius: 10px;
    }

    .note {
      background: #f3f4f6;
      padding: 16px;
      border-radius: 8px;
      font-size: 14px;
      color: #4b5563;
      margin-top: 24px;
    }

    .footer {
      padding: 24px;
      text-align: center;
      font-size: 13px;
      color: #6b7280; /* Gray-500 */
      background: #fafafa;
      border-top: 1px solid #e5e7eb;
    }

    .footer strong {
      color: #111827;
    }

    @media (max-width: 600px) {
      .container {
        margin: 16px;
      }

      .content {
        padding: 24px;
      }

      .header h1 {
        font-size: 24px;
      }

      .otp {
        font-size: 24px;
        letter-spacing: 4px;
      }
    }
  </style>
</head>
<body>

  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1>Todoz</h1>
      <p>Secure Verification</p>
    </div>

    <!-- Content -->
    <div class="content">
      <h2>Hello 👋</h2>

      <p>
        You recently requested a verification code to access your <strong>Todoz</strong> account.
        Please use the OTP code below to continue.
      </p>

      <!-- OTP Box -->
      <div class="otp-box">
        <div class="otp">${otp}</div>
      </div>

      <p>
        This code is valid for <strong>5 minutes</strong>. Please do not share this code with anyone.
      </p>

      <div class="note">
        ⚠️ If you did not request this verification, please ignore this email or contact our support team.
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>
        © 2026 <strong>Todoz</strong>. All rights reserved.
      </p>
      <p>
        This is an automated message. Please do not reply to this email.
      </p>
    </div>

  </div>

</body>
</html>
`}

async function sendEmail(userEmail, otpCode) {
     await transporter.sendMail({
          from: GMAIL,
          to: userEmail,
          subject: "Account Verification",
          html: templateHTML(otpCode)
     })
}

// Exports
module.exports = { sendEmail }