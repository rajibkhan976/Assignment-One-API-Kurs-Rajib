//method for adding students through HTTP POST method
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
//method for listing students through HTTP GET method
getStudents = (req, res, next) => {
	var query;
	if (req.query.name) {
		query = req.models.Student.findOne({'students.name': req.query.name});
	} else if (req.query._id) {
		query = req.models.Student.findOne({'students._id': req.query._id});
	} else {
		query = req.models.Student.find();
	}
	query.exec().then((students) => {
		return res.send(students);
	}).catch((error) => {
		next(error)
	})
}
//method for getting students by id through HTTP GET method
getStudentById = (req, res, next) => {
	req.models.Student.findById(req.params.id).then((student) => {
		return res.send(student);
	}).catch((error) => {
		next(error)
	})
}
//method for updating student by id through HTTP PUT method
updateStudentByID = (req, res, next) => {
	//update student based on parameter
	req.models.Student.updateOne({'students._id': req.params.id}, {
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
	}, {
		new: true,
		upsert: true,
		runvalidators: true
	}).then((status) => {
		if (status.upserted) {
				res.status(201);
			} else if (status.nModified) {
				res.status(200);
			} else {
				res.status(204)
			}
			res.send();
	}).catch((error) => {
		next(error)
	})
	//update student based on query parameter
	var updateQuery;
	if (req.query._id) {
		updateQuery = req.models.Student.updateOne({'students._id': req.query._id}, {
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
		}, {
			new: true,
			upsert: true,
			runvalidators: true
		});
		updateQuery.exec().then((status) => {
			if (status.upserted) {
				res.status(201);
			} else if (status.nModified) {
				res.status(200);
			} else {
				res.status(204)
			}
			res.send();
		}).catch((error) => {
			next(error)
		})
	}
}
//method for deleting student by id through HTTP DELETE method
deleteStudentById = (req, res, next) => {
	req.models.Student.findByIdAndDelete(req.params.id).then((deleted) => {
		if (deleted) {
			return res.send(deleted).status(200);
		}
		res.sendStatus(204);
	}).catch((error) => {
		next(error)
	})
}

module.exports = {
	addStudent,
	getStudents,
	getStudentById,
	updateStudentByID,
	deleteStudentById
}