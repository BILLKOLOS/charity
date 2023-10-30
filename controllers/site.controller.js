const db = require("../models");
const { Contact, Volunteer } = db

// Contact Us ...
contactUs = (req, res) => {
	return Contact.create({
		name: req.body.name,
		email: req.body.email,
		subject: req.body.subject,
		message: req.body.message,
	})
	.then(contact => {
		if (contact) {
			res.status(200).send({
				success: true,
				message: 'Sent successfully.',
			});
		}
		else {
			res.status(400).json({
				success: false,
				message: 'An error occurred',
			});
		}
	})
	.catch(err => {
		console.log(err);
		return res.status(500).send({
			success: false,
			message: 'Could not add your message, please try again!',
		});
	});
}

// Volunteer Us ...
volunteer = (req, res) => {
	return Volunteer.create({
		name: req.body.name, email: req.body.email,
		reason: req.body.reason
	})
		.then(volunteer => {
			if (volunteer) {
				res.status(200).send({
					success: true,
					message: 'Sent successfully.',
				});
			}
			else {
				res.status(400).json({
					success: false,
					message: 'An error occurred',
				});
			}
		})
		.catch(err => {
			console.log(err);
			return res.status(500).send({
				success: false,
				message: 'Could not add your message, please try again!',
			});
		});
}


const siteController = {
	contactUs, volunteer
};

module.exports = siteController;