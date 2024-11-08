import pool from "../config/dbConfig.js";

export async function listarEleicoes() {
    const result = await pool.query('SELECT * FROM eleicao');
    return result.rows;
}

export async function obterEleicao(id) {
    const result = await pool.query('SELECT * FROM eleicao WHERE id = $1', [id]);
    return result.rows[0] ?? false;
}

export async function resumoEleicao(id) {
    const result = await pool.query("SELECT * FROM vw_apuracao_final WHERE eleicao_id = $1", [id]);
    return result.rows;
}

export async function adicionarEleicao(eleicao) {
    const result = await pool.query(
        'INSERT INTO eleicao (nome, data, descricao) VALUES ($1, $2, $3) RETURNING *', 
        [eleicao.nome, eleicao.data, eleicao.descricao]
    );
    return result.rows[0];
}

export async function atualizarEleicao(id, eleicao) {
    const result = await pool.query(
        'UPDATE eleicao SET nome = $1, data = $2, descricao = $3 WHERE id = $4 RETURNING *',
        [eleicao.nome, eleicao.data, eleicao.descricao, id]
    );
    return result.rows[0];
}

export async function deletarEleicao(id) {
    await pool.query('DELETE FROM eleicao WHERE id = $1', [id]);
}