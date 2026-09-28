import { createServer } from 'node:http';

import send from './send.js';

createServer(function (request, response) {
    if (request.url !== '/api/health') {
        send(response, 404, { message: 'Recurso não encontardo.'});
        return;
    }
    
    send(response, 200, { status: 'Ok'});
}).listen(3000);

