const express = require('express');
const router1 = express.Router();
const controller = require('./controller.js');

router1.get("/",controller.getProducts);
router1.get("/:id",controller.getProductById);
router1.post("/",controller.addProduct);
router1.delete("/:id",controller.deleteProduct);
router1.put("/:id",controller.updateProductById);

module.exports = router1;