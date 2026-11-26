const mariadb = require('mariadb');

const conexao = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usos_ia',
    connectionLimit: 5
});

module.exports = conexao;