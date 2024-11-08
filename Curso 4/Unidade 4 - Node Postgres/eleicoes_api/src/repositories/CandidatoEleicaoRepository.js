import pool from "../config/dbConfig.js";


export async function buscarReferencia(idCandidato, idEleicao) {
    const result = await pool.query('SELECT * FROM candidato_eleicao WHERE candidato_id = $1 AND eleicao_id = $2', [idCandidato, idEleicao]);
    return result.rows[0];
}

export async function adicionarCandidatoEleicao(idCandidato, idEleicao) {
    const result = await pool.query('INSERT INTO candidato_eleicaos (eleicao_id, candidato_id) VALUES ($1, $2) RETURNING *', [idEleicao, idCandidato]);
    return result.rows[0];
}

export async function removerCandidatoEleicao(idCandidato, idEleicao) {
    await pool.query('DELETE FROM candidato_eleicao WHERE eleicao_id = $1 AND candidato_id = $2', [idEleicao, idCandidato]);
}