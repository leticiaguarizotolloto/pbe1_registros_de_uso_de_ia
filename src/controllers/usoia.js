
const db = require('../db');

// Listar todos os registros
exports.listar = async (req, res) => {
    try {
        const resultado = await db.query('SELECT * FROM usoia');
        res.json(resultado);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Buscar registro por ID
exports.buscar = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await db.query(
            'SELECT * FROM usoia WHERE id = ?',
            [id]
        );

        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: 'Registro não encontrado' });
        }

        res.json(resultado[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Cadastrar registro
exports.criar = async (req, res) => {
    try {
        const {
            usuarioId,
            sistema,
            tipo,
            finalidade,
            tecnologia,
            nivelRisco,
            revisaoHumana
        } = req.body;

        const resultado = await db.query(
            `INSERT INTO usoia
            (usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana]
        );

        res.status(201).json({
            mensagem: 'Registro cadastrado com sucesso!',
            id: Number(resultado.insertId)
        });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Atualizar registro
exports.atualizar = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            usuarioId,
            sistema,
            tipo,
            finalidade,
            tecnologia,
            nivelRisco,
            revisaoHumana
        } = req.body;

        const resultado = await db.query(
            `UPDATE usoia SET
            usuarioId = ?,
            sistema = ?,
            tipo = ?,
            finalidade = ?,
            tecnologia = ?,
            nivelRisco = ?,
            revisaoHumana = ?
            WHERE id = ?`,
            [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana, id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Registro não encontrado' });
        }

        res.json({ mensagem: 'Registro atualizado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Excluir registro
exports.excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await db.query(
            'DELETE FROM usoia WHERE id = ?',
            [id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Registro não encontrado' });
        }

        res.json({ mensagem: 'Registro excluído com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Resumo da contagem dos níveis de risco
exports.resumo = async (req, res) => {
    try {
        const resultado = await db.query(
            `SELECT nivelRisco, COUNT(*) AS total
             FROM usoia
             GROUP BY nivelRisco`
        );

        res.json(resultado);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
