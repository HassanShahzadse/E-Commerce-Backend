var express = require('express');
var router = express.Router();


const { createProduct,getProduct,updateProduct,deleteProduct,getProductByCategory,getProductById,createBulkProduct } = require('../controller/index');


router.post('/createProduct',createProduct)
router.post('/createBulkProduct',createBulkProduct)
router.get('/getProduct',getProduct)
router.put('/updateProduct',updateProduct)
router.delete('/deleteProduct',deleteProduct)
router.get('/getProductByCategory',getProductByCategory)
router.get('/getProductById',getProductById)
module.exports = router;