const {models} = require("../model/definations")

module.exports = {
    createRole: async function(body){
        // return body;
        const result = await models.Roles.create({...body});
        return result;
    }
}