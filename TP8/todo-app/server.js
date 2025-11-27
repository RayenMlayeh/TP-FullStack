const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // pour analyser le corps des requêtes JSON

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://theray204_db_user:akS6HPULg0FS4WWN@cluster0.gvadxbc.mongodb.net/todoApp')
.then(() => console.log('Connecté à la base de données MongoDB'))
.catch((err) => console.log('Erreur de connexion à MongoDB:', err));

// Importer le modèle Task
const Task = require('./models/task');

// Créer une route pour récupérer les tâches
app.get('/tasks', async (req, res) => {
try {
const tasks = await Task.find();
res.send(tasks);
} catch (err) {
res.status(500).send({ error: 'Erreur lors de la récupération des tâches' });
}
});

// Créer une route pour ajouter une tâche
app.post('/tasks', async (req, res) => {
try {
const newTask = new Task({
title: req.body.title,
completed: false
});
await newTask.save();
res.send(newTask);
} catch (err) {
res.status(500).send({ error: 'Erreur lors de l\'ajout de la tâche' });
}
});

app.listen(5000, () => {
console.log('Serveur backend en cours d\'exécution sur le port 5000');
});