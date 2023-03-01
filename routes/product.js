var express = require('express');
var router = express.Router();


const { createProduct,getProduct,updateProduct,deleteProduct,getProductById } = require('../controller/index');


router.post('/createProduct',createProduct)
router.get('/getProduct',getProduct)
router.put('/updateProduct',updateProduct)
router.delete('/deleteProduct',deleteProduct)
router.get('/getProductById',getProductById)
module.exports = router;