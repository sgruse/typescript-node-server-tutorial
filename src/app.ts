// External Dependencies
import * as express from 'express'

class App {

	// ref to Express instance
	public express: express.Application

	//Run configuration methods on the Express instance.
	constructor() {
		this.express = express()
		this.routes()
	}

	// Configure API endpoints.
	private routes(): void {

		let router = express.Router();
		// placeholder route handler
		router.get('/', (req, res, next) => {
			res.json({
				message: 'Your Typescript Server'
			});
		});
		this.express.use('/', router)
	}
}

export default new App().express