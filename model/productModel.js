const {models} = require("../model/definations")
const data = require("../data.json")
module.exports = {
    createProduct: async function(body){

        const result = await models.Product.create(body);
        return result;
    },
    createBulkProduct: async function(){

        const result = await models.Product.bulkCreate(data);
        return result;
    },
    getProduct: async function(){

        const result = await models.Product.findAll({
    
        });
        return result;
    },
    getProductByCategory: async function(category){

        const result = await models.Product.findAll({
            where:{category:category},
            
        });
        return result;
    },
    getProductById: async function(id){

        const result = await models.Product.findAll({
            where:{id:id},
            
        });
        return result;
    },
    updateProduct: async function(body){
        
        const result = await models.Product.update(
        {
        ...body
        },
        {
            where : {productId: body.id}
        }
        );
        return result;
    },
    deleteProduct: async function(id){
        
        const result = await models.Product.destroy(
            {
                where : {productId:id}
            }
       
        );
        return "Deleted a Product";
    },

}