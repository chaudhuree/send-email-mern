const nodemailer = require("nodemailer");

const sendEmailFromEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "carolina94@ethereal.email",
      pass: "e8pyD4yQQHj3u4Nt4C",
    },
  });

  let info = await transporter.sendMail({
    from: "from@gmail.com",
    to: "to@gmail.com",
    subject: "tesing ethereal",
    html: "<h2>Sending Emails nodemailer and ethereal</h2>",
  });

  res.json(info);
};

module.exports = sendEmailFromEthereal;
