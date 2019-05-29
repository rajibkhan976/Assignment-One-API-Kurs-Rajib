addStudent = (req, res, next) => {
	req.models.Student.create({
		students: {
			_id: req.body.students._id,
			email: req.body.students.email,
			name: req.body.students.name,
			address: {
				road: req.body.students.address.road,
				zipcode: req.body.students.address.zipcode,
				city: req.body.students.address.city
			}
		}
	}).then((student) => {
		return res.status(201).send(student);
	}).catch((error) => {
		next(error)
	})
}

getStudents = (req, res, next) => {
	req.models.Student.find().then((students) => {
		return res.send(students);
	}).catch((error) => {
		next(error)
	})
}

module.exports = {
	addStudent,
	getStudents
}