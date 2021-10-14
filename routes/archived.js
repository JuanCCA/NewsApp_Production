const { Router } = require("express");
const deleteArchived = require("../handlers/archived/deleteArchived");
const router = Router();

const getArchived = require('../handlers/archived/getArchived')


router.get('/get_archived', async(req,res) => {

    const response = await getArchived();

    res.json(response)
})

router.delete('/delete_archived', async(req,res) => {

    try {
        console.log(req.body)
        const _id = req.body._id
        
        if(!_id){
            throw 500;
        }

        await deleteArchived(_id)
        res.json(200)

    } catch(e){
        res.json(500)
    }

})

module.exports = router;