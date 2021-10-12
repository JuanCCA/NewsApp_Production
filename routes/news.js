const { Router } = require("express");
const router = Router();
const archiveNew = require("../handlers/news/archiveNew");
const getNews = require('../handlers/news/getNews')
const createNew = require('../handlers/news/createNew')



router.get('/get_news', async(req,res) => {

    const response = await getNews();

    res.json(response)
})

router.post('/create_new', async(req,res) => {
    try{
        console.log("LLAMADA CAPTADA")
        const body = req.body
        const response = await createNew(body);
        console.log("SE HA CREAD UNA NOTICIA")
        res.json(200)
        
    } catch(e){
        console.log(e);
        res.json(500)
    }
})


router.post('/archive_new', async(req,res) => {

    const _id = req.body._id
    console.log(_id)

try {
    const response = await archiveNew(_id);
    
    res.json(200)

} catch (e){
    res.json(500)
}


})

module.exports = router;