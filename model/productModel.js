const {models} = require("../model/definations")

module.exports = {
    createProduct: async function(body){

        const result = await models.Product.create(body);
        return result;
    },
    getProduct: async function(){

        const result = await models.Product.findAll({
    
        });
        return result;
    },
    getProductById: async function(ids){

        const result = await models.Product.findAll({
            where:{id:ids},
            
        });
        return result;
    },
    updateProduct: async function(body){
        
        const result = await models.Product.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    deleteProduct: async function(id){
        
        const result = await models.Product.destroy(
            {
                where : {id:id}
            }
       
        );
        return "Deleted a User";
    },

}