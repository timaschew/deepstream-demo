const deepstream = require('deepstream.io-client-js')

const client = deepstream('localhost:6021').login({}, function(success, data) {
	console.log(arguments)
	if (success) {
		const record = client.record.getRecord('foo/bar')
		record.whenReady(() => {
			record.set({hello: 'world'})
		})
	}
})

client.on('error', (data) => {
	console.error(data)
})

