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
	var query;
	if (req.query.name) {
		query = req.models.Student.findOne({'students.name': req.query.name});
	} else {
		query = req.models.Student.find();
	}
	query.exec().then((students) => {
		return res.send(students);
	}).catch((error) => {
		next(error)
	})
}

getStudentById = (req, res, next) => {
	req.models.Student.findById(req.params.id).then((student) => {
		return res.send(student);
	}).catch((error) => {
		next(error)
	})
}

module.exports = {
	addStudent,
	getStudents,
	getStudentById
}