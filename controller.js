const pool = require('./db.js');
const { Sequelize, DataTypes } = require('sequelize');

// products hay Products -> new
const Product = pool.define('Products', {
    // Model attributes are defined here
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    brand: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
});
Product.sync();
// createdAt và updatedAt là NULL -> sửa
// Table Products mới trống

const getProducts = async (req,res)=>{
    const results = await Product.findAll();
    res.status(200).json(results);
};
const getProductById = async (req,res)=>{
    const id = req.params.id;
    const results = await Product.findOne({where:{product_id:id}});
    if(results == null){
        console.log('Id khong ton tai');
    }else{
        res.status(200).json(results);
    }
};
const deleteProduct = async (req,res)=>{
    const id = req.params.id;
    const results = await Product.destroy({
        where: {
          product_id: id
        }
    });
    // 1
    res.status(200).json('Xoa thanh cong');
};
const addProduct = async (req,res)=>{
    const {product_id,product_name,brand,price} = req.body;
    const results = await Product.create({ product_id: product_id, product_name: product_name,brand: brand,price: price});
    res.status(200).json('Them thanh cong');
};
const updateProductById = async (req,res)=>{
    const id = req.params.id;
    const {product_name,brand,price} = req.body;
    const results = await Product.update({ product_name: product_name, brand: brand, price: price},{
        where: {
            product_id: id
        }
    });
    res.status(200).json('Update thanh cong');
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProductById,
}