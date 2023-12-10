
// Importing mpesa routes
const mpesa = require('../routes/mpesa.routes');
const auth = require('../routes/auth.routes');
const user = require('../routes/user.routes');
const booking = require('./site.routes')
const admin = require('../routes/admin.routes')
const pages = require('../routes/pages.routes')
const paypal = require('../routes/paypal.routes')
const email = require('../routes/email.routes')

const routes = app => {
	pages(app);
	mpesa(app);
	auth(app);
	user(app);
	booking(app);
	admin(app);
	paypal(app);
	email(app);
}

module.exports = routes