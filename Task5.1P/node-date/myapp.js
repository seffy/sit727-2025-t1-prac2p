const http = require('http');
const os = require('os');
const fs = require('fs');

const listenPort = 8080;
const stampFile = '/data/datestamp.txt';

console.log('Server starting on host '+os.hostname()+' port '+listenPort+'...');

const server = http.createServer((req, res) => {
    let clientIP = req.connection.remoteAddress;
    console.log('Processing request for '+req.url+' from '+clientIP);
    res.writeHead(200);
    if (fs.existsSync(stampFile)) {
        data = fs.readFileSync(stampFile, 'utf8');
        res.write(', I was created on '+data);
    }
    res.end('\n');
});

server.listen(listenPort);