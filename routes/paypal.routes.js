const { createOrder, captureOrder, handleResponse, generateAccessToken } = require('../controllers').Paypal

module.exports = function(app) {
	app.post("/api/orders", async (req, res) => {
		try {
			// use the cart information passed from the front-end to calculate the order amount details
			const { cart } = req.body;
			const { jsonResponse, httpStatusCode } = await createOrder(cart);
			res.status(httpStatusCode).json(jsonResponse);
		} catch (error) {
			console.error("Failed to create order:", error);
			res.status(500).json({ error: "Failed to create order." });
		}
	});
	
	app.post("/api/orders/:orderID/capture", async (req, res) => {
		try {
			const { orderID } = req.params;
			const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
			res.status(httpStatusCode).json(jsonResponse);
		} catch (error) {
			console.error("Failed to create order:", error);
			res.status(500).json({ error: "Failed to capture order." });
		}
	});
	
	// serve index.html
	// app.get("/", (req, res) => {
	// 	res.sendFile(path.resolve("./client/checkout.html"));
	// })
	app.get('/donate', (req, res) => {
		const current = req.url; // Get the current URL
		res.render('pages/checkout', { current })
	})
}