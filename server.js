
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Importar as rotas
const routes = require('./src/routes');

app.use('/', routes);

// Porta do servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
