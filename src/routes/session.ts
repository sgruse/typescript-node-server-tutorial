import { Request, Response, Router } from 'express'

export default function SessionRoutes(router: Router) {

	router.get('/', (req: Request, res: Response) => {
		console.log('Hitting the root route')
		res.send({message: 'Welcome my friend'})
	})

}