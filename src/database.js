const mongoose = require('mongoose');


/**
 * Connect or create & connect to a database.
 */
async function databaseConnect(){
	try {
        // DB connection can take som time, eg. if DB is in the cloud
		console.log("Connecting to database...");
		await mongoose.connect(process.env.DB_URI_LOCAL);
		console.log("Database connected");
	} catch (error) {
		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
	}
}

module.exports = {
	databaseConnect
}