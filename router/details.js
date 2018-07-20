var express = require('express')
var Router = express.Router()

var ArticlModel = require('../models/article')

Router.get('/:id',function(req,res){
	ArticlModel.findById(req.params.id).then(function(doc){
		res.render('html/details',{artcleDate:doc})
		}
	)
})

Router.post('/getDetails',function(req,res){
	ArticlModel.findById(req.body.articlId).then(function(doc){
			res.json({
				code:0,
				message:'文章内容',
				data:doc,
			})
		}
	)
})

module.exports = Router;