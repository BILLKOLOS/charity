// noinspection JSUnresolvedFunction
// noinspection JSUnresolvedReference
module.exports = (sequelize, Sequelize) => {
	const Contact = sequelize.define("contacts", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		subject: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		message: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		
	}	, {
		tableName: 'contacts'
	});
	
	const Volunteer = sequelize.define("volunteers", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		reason: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		
	}	, {
		tableName: 'volunteers'
	});
	
	const	Transaction = sequelize.define("transactions", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		bookId: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		date: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		phone: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		receipt: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		amount: {
			type: Sequelize.INTEGER,
			allowNull: false,
		}
	}	, {
		tableName: 'transactions'
	});
	
	return {Contact, Volunteer, Transaction}
}