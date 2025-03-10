const nodemailer = require("nodemailer");

const sendEmail = async(options) => {
    console.log(process.env.NEXT_BREVO_USER, process.env.NEXT_BREVO_PASSWORD, 'cred')
    const transporter = nodemailer.createTransport({
   
        pool: true,
        maxConnections: 10,
        host: "smtp-relay.brevo.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_BREVO_USER,
          pass: process.env.NEXT_BREVO_PASSWORD
        },
        tls: {
          // Set TLS options if needed
          rejectUnauthorized: false // Example: bypass certificate verification
        },
        debug: true, // Enable debugging for more detailed logs
      });
    
      const mailOptions = {
        from:'Sukanta Dolai <sukanta7.official@gmail.com>',
        to: options.to,
        subject: options.subject,
        html: options.text,
      };
      await transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log("Err",err);
        } else {
          console.log("info",info?.envelope, info?.response);
        }
      });
};

module.exports = sendEmail;