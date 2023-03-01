var express = require('express');
var router = express.Router();


const { createUser,getUser,updateUser,deleteUser,getUserById } = require('../controller/index');


router.post('/createUser',createUser)
router.get('/getUser',getUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser',deleteUser)
router.get('/getUserById',getUserById)
module.exports = router;
