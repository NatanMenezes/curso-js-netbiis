import pool from "../config/dbConfig.js";

export async function listarEleitores() {
    const result = await pool.query('SELECT * FROM eleitor');
    return result.rows;
}

export async function obterEleitor(id) {
    const result = await pool.query('SELECT * FROM eleitor WHERE id = $1', [id]);
    return result.rows[0] ?? false;
}

export async function criarEleitor(eleitor) {
    const result = await pool.query(
        'INSERT INTO eleitor (nome, cpf, senha) VALUES ($1, $2, $3) RETURNING *', 
        [eleitor.nome, eleitor.cpf, eleitor.senha]
    );
    return result.rows[0];
}

export async function atualizarEleitor(id, eleitor) {
    const result = await pool.query(
        'UPDATE eleitor SET nome = $1, cpf = $2, senha = $3 WHERE id = $4 RETURNING *',
        [eleitor.nome, eleitor.cpf, eleitor.senha, id]
    );
    return result.rows[0];
}

export async function deletarEleitor(id) {
    await pool.query('DELETE FROM eleitor WHERE id = $1', [id]);
}