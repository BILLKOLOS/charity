const db = require('../models')
const { Contact, User } = db

fetchContacts = async (req, res) => {
	let totalContacts = await Contact.count()
	
	//Extract the page number and limit from the request
	const page = parseInt(req.query.page) || 1
	// const limit =  parseInt(req.query.limit) || 10
	
	const limit =  5
	
	//Total Pages
	const totalPages = Math.ceil(totalContacts / limit)
	
	//Check if requested page is out of range or invalid
	
	if (page < 1 || page > totalPages || isNaN(page)){
		return res.status(400).json({
			success: false,
			message: 'Page out of range.'
		})
	}
	
	//Calculate the offset based on the page and limit
	const offset = (page - 1) * limit;
	
	//Query the Bookings
	Contact.findAll({
		limit,
		offset,
		order: [['createdAt', 'ASC']]
	})
	.then(contacts => {
		if(!contacts){
			return res.status(400).json({
				success: false,
				message: 'No Contacts found.'
			})
		}
		else{
			return res.status(200).json({
				success: true,
				contacts,
				pagination: {
					currentPage: page,
					totalPages,
					totalContacts
				}
			})
		}
	})
	.catch(err => {
		console.log(err)
		return res.status(500).json({
			success: false,
			message: 'An error has occurred!'
		})
	})
}


fetchPeople = (req, res) => {
	User.findAll({
			attributes: ['username',]
		})
		.then(users => {
			if(!users){
				return res.status(200).json({
					success: false,
					message: 'No Users found.'
				})
			}
			
			return res.status(200).json({
				success: true,
				users
			})
			
		})
		.catch(err => {
			console.log(err)
			return res.status(500).json({
				success: false,
				message: 'An error has occurred!'
			})
		})
}


const adminController = {
	fetchContacts, fetchPeople
}

module.exports = adminController