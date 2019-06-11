const express = require('express');
const routes = require('./routes');
const db = require('./models');
const app = express(); 

// environment variable PORT or 5000 if unset
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(error.statusCode || error.status || 500).send({error: error});
})

app.use((req, res, next) => {
	req.models = db.models;
	next()
})

app.use('/', routes);

// Start up server and begin listen to requests
if (process.env.NODE_ENV != 'test') {
	db.connectDB().then(() => {
	const listener = app.listen(port, () => {
		console.info(`Server is listening on port ${port}.`);
	})
}).catch((error) => {
	console.error(error);
})
}

module.exports = app;