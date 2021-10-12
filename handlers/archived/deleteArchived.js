const getConnection = require('../dataBase/getConnection')
const ObjectID = require('mongodb').ObjectId


const deleteArchived = async(_id) => {
    console.log("primero")
    
    const client = await getConnection();
    const archivedDeleted = await client.db('app').collection('documents').findOneAndDelete({"_id": ObjectID(_id)});
    console.log("archivo deleteado lets go")

    return true
}

module.exports = deleteArchived;