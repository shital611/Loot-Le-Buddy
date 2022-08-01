const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Pools = mongoose.model('Pools');
const Users=mongoose.model('Users');
router.use(express.json())

router.get('/', (req, res) => {
    res.render("pool/addOrEdit", {
        viewTitle: "Insert Pool"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});




function insertRecord(req, res) {
    var pool = new Pools();
    pool.PoolID = req.body.PoolID;
    pool.PoolName = req.body.PoolName;
    pool.Hemper1 = req.body.Hemper1;
    pool.Hemper1Worth = req.body.Hemper1Worth;
    pool.Hemper2=req.body.Hemper2;
    pool.Hemper2Worth=req.body.Hemper2Worth
    pool.Hemper3=req.body.Hemper3;
    pool.Hemper3Worth=req.body.Hemper3Worth;
    pool.CoinsNeededToParticipate=req.body.CoinsNeededToParticipate;
    pool.PoolStartDate=req.body.PoolStartDate;
    pool.PoolEndDate=req.body.PoolEndDate
    pool.save((err, doc) => {
        if (!err){
            res.redirect('pool/list');

        }
           
       
            else
                console.log('Error during record insertion : ' + err);
        }
    );
}

function updateRecord(req, res) {
    Pool.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('pool/list'); }
      
            else
                console.log('Error during record update : ' + err);
        }
    );
}


router.get('/list', (req, res) => {
    Pools.find((err, docs) => {
        if (!err) {
            res.render("pool/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving Pool list :' + err);
        }
    });
});




router.get('/:id', (req, res) => {
    Pools.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("pool/addOrEdit", {
                viewTitle: "Update Pools",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Pools.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/pool/list');
        }
        else { console.log('Error in Pool delete :' + err); }
    });
});


 


//pool user API

router.get('/GetParticularPoolDetail',async (req,res)=>{
    try{
     const GetParticularPoolDetail=await Pools.find({}).sort({"PoolID":1})
     res.status(201).send(GetParticularPoolDetail)
    }catch(e){
         res.status(400).send(e)
    }
    
 })

 router.get('/GetParticularPoolDetail/:id',async (req,res)=>{
    try{
    const _id=req.params.id
    const GetParticularPoolDetail=await Pools.findById(_id)
    res.send(GetParticularPoolDetail)
    }catch(e){
         res.status(400).send(e)
    }    
 })


 //user API
 
router.get('/GetUserDetail',async (req,res)=>{
    try{
     const getUserData=await Users.findOne({})
     res.status(201).send(getUserData)
    }catch(e){
         res.status(400).send(e)
    }
})

 router.get('/GetUserDetail/:id',async (req,res)=>{
    try{
    const _id=req.params.id
    const GetParticularPoolDetail=await Users.findById(_id)
    res.send(GetParticularPoolDetail)
    }catch(e){
         res.status(400).send(e)
    }    
 })

 router.post("/GetUserDetail",async(req,res)=>{
    try{
        const addingUsers=new Users(req.body)
        console.log(req.body)
        const savedUserData=await addingUsers.save()
        //res.send("data stored")
        res.send(savedUserData)
    }catch(e){
        res.send(e)
    }
})

//generate OTP

router.get('/GetUserDetail/:monumber',async (req,res)=>{
    try{
    const phone=req.params.PhoneNo
    const GetParticularPoolDetail=await Users.findById(phone)
    res.send(GetParticularPoolDetail)
    }catch(e){
         res.status(400).send(e)
    }     
 })

module.exports = router;