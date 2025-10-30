// c. Génération d'une page HTML
const http = require('http');
const fs = require('fs');

const PORT = 8080;

const serveur = http.createServer((req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Erreur</h1><p>Impossible de lire le fichier</p>');
            return;
        }
        
        const pageHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mon Serveur Node.js</title>
</head>
<body>
    <h1>Bienvenue sur mon serveur</h1>
    <p>${data}</p>
    <footer>Créé avec Node.js</footer>
</body>
</html>
        `;
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(pageHTML);
    });
});

serveur.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
