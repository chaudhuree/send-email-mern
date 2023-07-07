const nodemailer = require("nodemailer");

const sendEmailFromGmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: {
      name: "sohan chaudhuree",
      address: process.env.USER_EMAIL,
    },
    to: "chaudhuree@gmail.com",
    // for multiple emails use comma separated values or an array
    // example: 'email1, email2, email3'
    // example: ['email1', 'email2', 'email3']
    subject: "🎉🚙 Testing Nodemailer",
    text: "this is text message",
    // html: "<h2>Sending Emails with Node.js Nodemailer and Gmail</h2>",
    // only one type at a time. that means either text or html
  });

  res.json(info);
};

module.exports = sendEmailFromGmail;
