const http = require('http');
const fs = require('fs');

const PORT = 3000;

const serveur = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur de lecture du fichier');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

serveur.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
