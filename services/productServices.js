
const { models } = require('../model/definations');
 const userModel= require('../model/productModel')

module.exports= {
createProduct: async function(body){
    const data = await userModel.createProduct(body);
    return data;
},
createBulkProduct: async function(){
    const data = await userModel.createBulkProduct();
    return data;
},
getProduct: async function(){
    const result = await userModel.getProduct();
    return result;
},
updateProduct: async function(body){

    const result = await userModel.updateProduct(body);
    return result;
},
getProductById: async function(id){

    const result = await userModel.getProductById(id);
    return result;
},
getProductByCategory: async function(category){

    const result = await userModel.getProductByCategory(category);
    return result;
},
deleteProduct: async function(id){

    const result = await userModel.deleteProduct(id);
    return result;
},
}