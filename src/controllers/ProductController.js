const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {/// rotas
    async index(req,res){ 
        const{ page = 1} = req.query;
        const products = await Product.paginate({},{page, limit:10});/// procura todos os produtos
        
        return res.json(products);
    },

    async store(req, res){
        const product = await Product.create(req.body);
        
        return res.json(product);

    },
    async detalhes(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new :true});

        return res.json(product);
    },
    async destroy(req,res){ 

        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }
};