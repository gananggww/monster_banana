var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.render('about')
})

router.get('/sponsorship', function(req, res) {
  res.render('sponsorship')
})

router.get('/reseller', function(req, res) {
  res.render('reseller')
})

router.get('/faq', function(req, res) {
  res.render('faq')
})

router.post('/email', function(req, res) {

  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: account.user, // generated ethereal user
              pass: account.pass // generated ethereal password
          }
      });

      // console.log(transporter);

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Fred Foo 👻" <mochagsr@gmail.com>', // sender address
          to: 'gananggww@gmail.com, ganangswm@gmail.com, mochagsr@gmail.com', // list of receivers
          subject: 'Hello ✔', // Subject line
          text: 'Hello world?', // plain text body
          html: '<b>Hello world?</b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          res.send(info);
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
  });
})



module.exports = router;
