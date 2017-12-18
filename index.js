var Server = require('./server/server.js');
var WebSocketServer = require('./server/webSocketServer.js');
var port = 8000;
var wsPath = '/websocket';
var server = new Server(port);
var wsServer = new WebSocketServer(server.dispatcher, wsPath);
var fs = require('fs');
var pug = require('pug');

server.dispatcher.set('views', __dirname + '/templates');

server.addRout('GET', '/', 'index.pug');

server.addRout('POST', '/upload-document', null, function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Upload received');
});

server.addRout('POST', '/api/auth', null, function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(response.body);
});

server.addSources(__dirname, 'templates', '/templates');
server.addSources(__dirname, '/bin');
server.addSources(__dirname, '/client/css');
server.addSources(__dirname, '/client');

var facts = [
    {
        id: 1,
        category: 'general',
        fact: 'People say "Bless you" when you sneeze because when you sneeze,your heart stops for a mili-second.'
    },
    {
        id: 2,
        category: 'general',
        fact: 'It is physically impossible for pigs to look up into the sky.'
    },
    {
        id: 3,
        category: 'general',
        fact: 'More than 50% of the people in the world have never made or received a telephone call.'
    },
    {
        id: 4,
        category: 'general',
        fact: 'Wearing headphones for just an hour will increase the bacteria in your ear by 700 times.'
    },
    {
        id: 5,
        category: 'general',
        fact: 'The cigarette lighter was invented before the match.'
    },
    {
        id: 6,
        category: 'general',
        fact: 'Thirty-five percent of the people who use personal ads for dating are already married.'
    },
    {
        id: 7,
        category: 'general',
        fact: 'A duck\'s quack doesn\'t echo, and no one knows why.'
    },
    {
        id: 8,
        category: 'general',
        fact: 'Like fingerprints, everyone\'s tongue print is different.'
    },
    {
        id: 9,
        category: 'general',
        fact: 'Every year about 98% of atoms in your body are replaced.'
    },
    {
        id: 10,
        category: 'general',
        fact: 'Only one satellite has been ever been destroyed by a meteor: the European Space Agency\'s Olympus in 1993.'
    },
    {
        id: 11,
        category: 'general',
        fact: 'Sound travels 15 times faster through steel than through the air.'
    },
    {
        id: 12,
        category: 'general',
        fact: 'There are more than fifty different kinds of kangaroos.'
    }];

server.listen(function(response) {

});

wsServer.on('message', function(message, client, clientID) {
    var response = JSON.parse(message);

    if (response.message === 'GET_FACTS') {
        client.send(JSON.stringify({
            message: 'ADD_FACTS',
            facts: facts
        }))
    }

});

wsServer.on('close', function(message, client, clientID) {
    delete wsServer.clients[clientID];
});

