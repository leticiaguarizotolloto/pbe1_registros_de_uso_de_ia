
const db = require('../db');

// Listar usuários
exports.listar = async (req, res) => {
    try {
        const resultado = await db.query(
            'SELECT id, nome, email FROM usuario'
        );
        res.json(resultado);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Buscar usuário por ID
exports.buscar = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await db.query(
            'SELECT id, nome, email FROM usuario WHERE id = ?',
            [id]
        );

        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.json(resultado[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Cadastrar usuário
exports.criar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const resultado = await db.query(
            'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, PASSWORD(?))',
            [nome, email, senha]
        );

        res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso!',
            id: Number(resultado.insertId)
        });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Atualizar usuário
exports.atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        const resultado = await db.query(
            'UPDATE usuario SET nome = ?, email = ?, senha = PASSWORD(?) WHERE id = ?',
            [nome, email, senha, id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.json({ mensagem: 'Usuário atualizado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Excluir usuário
exports.excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await db.query(
            'DELETE FROM usuario WHERE id = ?',
            [id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.json({ mensagem: 'Usuário excluído com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const resultado = await db.query(
            'SELECT id, nome, email FROM usuario WHERE email = ? AND senha = PASSWORD(?)',
            [email, senha]
        );

        if (resultado.length === 0) {
            return res.status(401).json({ mensagem: 'Email ou senha incorretos' });
        }

        res.json({
            mensagem: 'Login realizado com sucesso!',
            usuario: resultado[0]
        });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
