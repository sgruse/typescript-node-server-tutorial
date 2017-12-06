import * as express from 'express'

import Router from './routes'

export default class Server {
	
	constructor() {
		this.app = express()

		// Mount Routes
		Router.mountRoutes(this.app)
	}

	public static createServerInstance(): express.Express {
		return new Server().app
	}

	public app: express.Express
}