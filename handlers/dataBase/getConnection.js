const MongoClient = require("mongodb").MongoClient;

const cli = new MongoClient(process.env.DBURI)

let client = null;

const getConnection = async() => {
    if(!client){
        client = await cli.connect();
    } 

    return client
}

module.exports = getConnection;