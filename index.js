'use strict'

const container = require("./config/container");

const application = container.resolve("app");
const db = container.resolve("db");

application
	.start()
	.then(async () => {
		await db.sequelize.sync();
	})
	.catch(err => {
		console.log(err);
		process.exit();
	});