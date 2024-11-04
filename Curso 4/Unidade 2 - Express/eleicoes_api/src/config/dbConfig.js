import { JSONFilePreset } from 'lowdb/node';

const defaultData = {
    candidatos: []
}

const dbConfig = await JSONFilePreset('db.json', defaultData)
export default dbConfig