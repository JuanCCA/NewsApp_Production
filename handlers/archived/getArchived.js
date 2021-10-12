const getConnection = require('../dataBase/getConnection')


const getArchived = async() => {

    const client = await getConnection();
    const archived = await client.db('app').collection('documents').find({
        
        "archiveDate": {$ne: null}
    
    }).sort({date: -1}).toArray();

    console.log(archived)

    return archived;
    


}

module.exports = getArchived;