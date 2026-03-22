const { getDB } = require('../config/mongo')

const userModels = {
    findAll: async function (skip, limit) {
        try {
            const db = getDB();
            const total = await db.collection('Products').countDocuments();
            const data = await db.collection('Products').find().skip(skip).limit(limit).toArray();
            return { total, data }
        } catch (erro) {
            console.log(erro)
        }

    }
}

module.exports = userModels