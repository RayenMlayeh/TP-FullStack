const http = require('http');

const PORT = process.argv[2] || 4000;

const serveur = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Serveur mis à jour sans redémarrage manuel');
});

serveur.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
