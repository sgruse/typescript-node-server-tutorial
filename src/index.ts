import * as http from 'http'

// Import the app class
import App from './App'

// Instantiate a new express app instance
const app = new App().express
const server = http.createServer(app)
const port = 3000

// Tell the server to listen on port 3000
server.listen(port)
server.on('listening', onListening)

function onListening(): void {
	console.log('Server Listening at: ', port)
	let addr = server.address()
	let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`
}

