const express = require('express');/// importando o express
const routes = express.Router();

const ProductController = require('../src/controllers/ProductController.js');


//// criando a primeira rota
routes.get('/products',  ProductController.index);
routes.post('/products', ProductController.store); 
routes.get('/products/:id', ProductController.detalhes);
routes.put('/products/:id' , ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes; 