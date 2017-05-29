var mosca = require('mosca');

var mqttServer = new mosca.Server({
    port: 1883
});

mqttServer.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

mqttServer.on('published', function (package, client) {
    var topic = package.topic;
    console.log('message-arrived--->', 'topic = ' + topic + ', message = ' + package.payload.toString());
});

mqttServer.on('ready', function () {
    console.log('mqtt is running...');
});