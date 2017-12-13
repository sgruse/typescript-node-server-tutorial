import * as http from 'http'

import App from './App'

const server = http.createServer(App);
const port = 3000

server.listen(port);
server.on('listening', onListening);

function onListening(): void {
	console.log('Server Listening at: ', port)
	let addr = server.address();
	let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
}

