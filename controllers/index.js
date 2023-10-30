// Importing Timestamp Function
const Mpesa = require('../controllers/mpesa.controller');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller')
const siteController = require('./site.controller')
const adminController = require('../controllers/admin.controller')

module.exports = {
	Mpesa,
	userController,
	authController,
	siteController,
	adminController
};