const getConnection = require('../dataBase/getConnection')
const ObjectID = require('mongodb').ObjectId


const archiveNew = async(_id) => {
    console.log("primero")
    
    const client = await getConnection();
    const newToArchive = await client.db('app').collection('documents').findOneAndUpdate({"_id": ObjectID(_id)},{
        $set: {
            "archiveDate": new Date()
        }
    })

    console.log(newToArchive)
    return true
}

module.exports = archiveNew;