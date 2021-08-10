const nodemailer = require('nodemailer')
const creds = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  }
})

var express = require('express');
var router = express.Router();

router.post('/send', function(req, res, next) {
  const formData = req.body
  console.log(formData)
  console.log(req.body)
  const message = (
      '<h4>Name: ' + '<b>' + formData.firstName + ' ' + formData.lastName + '</b></h4>' +
      '<h4>Email: ' + '<b>' + formData.email + '</b> </h4>' +
      '<h4>Phone Number: ' + '+' + '<b>' + formData.phone + '</b></h4>' +
      '<h4>Description: ' + '<b><i>' + formData.text + '</i></b></h4>'
  )
  const mailOptions = {
    from: creds.USER,
    to: creds.USER,
    subject: 'New form',
    html: message
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});

module.exports = router;
