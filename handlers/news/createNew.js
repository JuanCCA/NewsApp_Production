const getConnection = require('../dataBase/getConnection')


const createNew = async({title,description,content,author}) => {

    const client = await getConnection();

    const document = {
        title,
        description,
        content,
        author,
        date: new Date(),
        archiveDate: null
    }
    const response = await client.db('app').collection('documents').insert(document)

    return true;
    
}

module.exports = createNew;