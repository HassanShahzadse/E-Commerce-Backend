

module.exports = {
    //user
    createUser: require("./users/createUser"),
    getUser: require("./users/getUser"),
    updateUser: require("./users/updateUser"),
    deleteUser: require("./users/deleteUser"),
    getUserById: require("./users/getUserById"),

    //roles
    createRole: require("./common/role"),
    
    //Product
    createProduct: require("./product/createProduct"),
    createBulkProduct: require("./product/createBulkProduct"),
    getProduct: require("./product/getProduct"),
    updateProduct: require("./product/updateProduct"),
    deleteProduct: require("./product/deleteProduct"),
    getProductByCategory: require("./product/getProductByCategory"),
    getProductById: require("./product/getProductById"),
    //login
    login:require('./common/login')
    
}