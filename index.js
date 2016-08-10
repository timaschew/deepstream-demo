const DeepstreamServer = require('deepstream.io')
const server = new DeepstreamServer()

server.on('started', () => {
	console.log('starting client')
	require('./client')
})

server.start()
