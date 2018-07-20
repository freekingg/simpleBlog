var express = require('express')
var Router = express.Router()

var ArticlModel = require('../models/article')

Router.get('/:id',function(req,res){
	console.log(req.params.id);
	ArticlModel.findById(req.params.id).then(function(doc){
			res.render('html/details',{artcleDate:doc})
		}
	)
})

module.exports = Router;