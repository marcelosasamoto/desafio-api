const express = require("express");
const routes = express.Router();
const LojaController = require("./controller/LojaController.js");



routes.get("/getstores", LojaController.getStores);
routes.get("/productsInStoreId=:storeRefId", LojaController.ProductsInStore)
routes.get("/getinfo", LojaController.getInfo);
module.exports = routes;