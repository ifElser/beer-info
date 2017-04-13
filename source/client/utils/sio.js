'use strict';

let connection;

export default function connect(token){
	return new Promise((resolve, reject) => {
		if(connection) return resolve(connection);
		// connection = io.connect('ws://demo.naxtrader.com:8080/socket.io/?EIO=3&transport=websocket');
		// connection.on('a', function(a){console.log('frame:', a)});
		connection = token ? io('ws://evm:8068', { query: `Authorization=${token}` }) : io('ws://evm:8068');
		connection.on('connect',           () => console.log('Web socket: connected') || resolve(connection));
		connection.on('reconnecting', attempt => console.log(`Web socket: reconnecting from ${attempt} attempt`));
		connection.on('reconnect',    attempt => console.log(`Web socket: reconnect from ${attempt} attempt`));
		connection.on('reconnect_attempt', () => console.log(`Web socket: trying to reconnect...`));
		connection.on('reconnect_failed',  () => console.log(`Web socket: reconnection attempt failed`));
		connection.on('connect_timeout',   () => console.log(`Web socket: connection time out...`));
		connection.on('disconnect',        () => console.log(`Web socket: disconnected...`));
		connection.on('reconnect_error',  err => console.log(`Web socket: reconnection error:\n`) || reject(err));
		connection.on('connect_error',    err => console.log(`Web socket: connection error:\n`) || reject(err));
		connection.on('error',            err => console.log(`Web socket: error:\n`, err) || reject(err));
	});
}
