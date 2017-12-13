// Import express
import * as express from 'express'

class App {

	// Ref to Express instance
	public express: express.Application

	//Run configuration methods on the Express instance.
	constructor() {
		this.express = express()
		this.routes()
	}

	// Configure API endpoints.
	private routes(): void {

		let router = express.Router();
		// Placeholder route handler
		router.get('/', (req, res, next) => {
			res.json({
				message: 'Your Typescript Server'
			});
		});
		this.express.use('/', router)
	}
}

export default App