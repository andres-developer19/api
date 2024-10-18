const express = require('express');
const data = require('./data.json');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Bienvenido a mi API');
});

// Ruta para obtener proyectos
app.get('/api/projects', (req, res) => {
    res.json(data.PROJECTS);
});

// Ruta para obtener experiencia
app.get('/api/experience', (req, res) => {
    res.json(data.EXPERIENCE);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
