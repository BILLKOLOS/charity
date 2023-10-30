const { siteController } = require('../controllers')

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, Content-Type, Accept"
		);
		next();
	});
	
	//Contact Us
	app.post('/api/v1/contact/new', siteController.contactUs);
	
	//Volunteer
	app.post('/api/v1/volunteer/new', siteController.volunteer);
	
	
};