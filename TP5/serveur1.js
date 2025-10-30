// a. Serveur minimal
const http = require('http');

const PORT = 8080;

const serveur = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bonjour');
});

serveur.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
