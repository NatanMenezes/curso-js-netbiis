import { JSONFilePreset } from 'lowdb/node';

const defaultData = {
    alunos: []
}

const db = await JSONFilePreset('db.json', defaultData)
export default db