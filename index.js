var nodemailer = require('nodemailer');

// Primary transporter (Gmail)
var primaryTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meghacsm2001@gmail.com',
    pass: 'tjnhbsvxexvszclb'
  }
});

var mailOptions = {
  from: 'meghacsm2001@gmail.com',
  to: 'singhharshikesh4@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello My Sweet Heart !'
};

function sendEmail(transporter, options, retries = 3) {
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(`Attempt failed with error: ${error}`);
      if (retries > 0) {
        console.log(`Retrying... Attempts remaining: ${retries}`);
        sendEmail(transporter, options, retries - 1);
      } else {
        console.log('All attempts failed. Email not sent.');
      }
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Start the email sending process with the primary transporter
sendEmail(primaryTransporter, mailOptions);
