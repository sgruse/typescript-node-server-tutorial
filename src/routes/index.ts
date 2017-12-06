// External Dependencies
import  { Express, Router } from 'express'

// Routes
import SessionRoutes from './session'

export default class RouterMount {

	public static mountRoutes(app: Express) {

		const router = Router()

		SessionRoutes(router)

		app.use('/', router)
	}
}