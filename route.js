var express = require('express');
var router = express.Router();
var item = require('./model/Items')


//api to fetch data
router.get('/items',async(req,res)=>{
    const it = await item.find()
    res.send(it)
})



//api to add data
router.post("/items",async(req,res)=>{
    const stud = new item({
        name:req.body.name,
        price:req.body.price
    })
    await stud.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



// api for updating
router.patch('/items/:id',async (req,res)=>{
    const it = await item.findOne({_id:req.params.id})
    it.name = req.body.name
    it.price = req.body.price
    await it.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



//delete api
router.delete("/items/:id",async(req,res)=>{
    const re = await item.deleteOne({_id:req.params.id});
    if(re.deleteCount==1)
    {
        res.status(200).jason({
            "msg":"Deleted"
        })
    }
    else
    {
        res.status(200).jason({
            "msg":"Not Deleted"
        })
    }
})
module.exports = router 
