const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

console.log(handle);
server.start(router.route,handle);