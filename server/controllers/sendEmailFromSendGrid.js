const sgMail = require("@sendgrid/mail");
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "chaudhuree@gmail.com",
    from: {
      name: "chaudhuree",
      email: process.env.USER_EMAIL,
    }, // Use the email address or domain you verified above
    subject: "Sending For Testing Purpose",
    text: "if somehow html is not working then this text will be shown",
    html: "<strong>i am working</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
