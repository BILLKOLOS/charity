const { authJwt } = require("../middleware");
const { adminController } = require('../controllers')
const paginate = require('express-paginate')

module.exports = function(app) {
	app.use(paginate.middleware(10,50))
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		
		next();
	});
	
	//Get contacts
	app.post(
		"/api/v1/admin/contacts",
		[authJwt.verifyToken, authJwt.isAdmin],
		adminController.fetchContacts
	)
	
	//Get people
	app.get(
		"/api/v1/admin/people",
		[authJwt.verifyToken, authJwt.isAdmin],
		adminController.fetchPeople
	)
}