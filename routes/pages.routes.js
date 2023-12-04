module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			// "token, Origin, Content-Type, Accept"
		);
		
		next();
	});
	
	app.get("/login", (req, res) => {
		res.render('pages/login')
	});
	
	app.get('/', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/index', { current })
	});
	
	app.get('/blog', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/blog', { current })
	})
	
	app.get('/about', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/about', { current })
	})
	
	app.get('/causes', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/causes', { current })
	})
	
	app.get('/contact-us', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/contact', { current })
	})
	
	// app.get('/donate', (req, res) => {
	// 	const current = req.url; // Get the current URL
	// 	res.render('pages/donate', { current })
	// })
	
	app.get('/event', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/event', { current })
	})
	
	app.get('/services', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/service', { current })
	})
	
	app.get('/post', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/single', { current })
	})
	
	app.get('/team', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/team', { current })
	})
	
};
