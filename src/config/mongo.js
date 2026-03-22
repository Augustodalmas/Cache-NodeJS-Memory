const { MongoClient } = require('mongodb')

async function connectDB() {
    try {
        const client = new MongoClient(process.env.MONGO_URL_STRING);

        await client.connect();
        db = client.db(process.env.MONGO_DB_NAME);

        console.log(`Conectado ao banco ${process.env.MONGO_DB_NAME}`);
    } catch (error) {
        console.log(`Erro ao se conectar ao banco ${process.env.MONGO_DB_NAME}: `, error);
    }
}

function getDB() {
    if (!db) throw new Error('Banco não conectado!')
    return db
}

module.exports = { connectDB, getDB }
