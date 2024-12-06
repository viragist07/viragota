const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { con_name, con_email, con_message } = JSON.parse(event.body);

  if (!con_name || !con_email || !con_message) {
    return {
      statusCode: 400,
      body: "Please complete the form and try again.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vhstudio7@gmail.com",
      pass: "Agota1991",
    },
  });

  const mailOptions = {
    from: `${con_name} <${con_email}>`,
    to: "viragist14@gmail.com",
    subject: `New contact from ${con_name}`,
    text: con_message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Message sent successfully!",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Failed to send the message.",
    };
  }
};
