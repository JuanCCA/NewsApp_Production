const getConnection = require('../dataBase/getConnection')


const getNews = async() => {

    const client = await getConnection();
    const news = await client.db('app').collection('documents').find({
        
        "archiveDate": {$eq: null}
    
    }).sort({date: -1}).toArray();

    console.log(news)

    return news;
    
}

module.exports = getNews;