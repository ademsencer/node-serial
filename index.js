const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
let port = null

port = new SerialPort('COM1', {
	baudRate: 9600,
	parser: new Readline('\r\n')
})

port.on('open', function (error) {
	if (!error) {
		console.log('Port open')
		try {
			
			//port.write('FF 00 11')
			
			port.on('data', function (data) {
				console.log(data)
			})
		} catch (e) {
			console.error(e)
		}
	} else
		console.log('failed to open' + error)
})
