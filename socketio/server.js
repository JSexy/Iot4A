var socketIo = require('socket.io');

socketIo.on('connection', function (socket) {
    console.log('a client  online...');
});

