mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	students: {
	_id: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true,
		validator: (v) => {
			return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		}
	},
	name: String,
	address: {
	   road: String,
	   zipcode: String,
	   city: String   
	   }
	}
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;