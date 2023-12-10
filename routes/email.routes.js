const { sendEmail } = require('../controllers')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  //Send Email
  app.post(
    "/api/v1/contact/send", sendEmail
  )

}