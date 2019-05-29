const express = require('express');
const routes = require('./routes');
const db = require('./models');
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	req.models = db.models;
	next()
})

app.use('/', routes);

// Start up server and begin listen to requests
db.connectDB().then(() => {
	const listener = app.listen(port, () => {
		console.info(`Server is listening on port ${port}.`);
	})
}).catch((error) => {
	console.error(error);
})