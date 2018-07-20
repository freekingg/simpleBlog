var express = require('express')
var Router = express.Router()

var ArticlModel = require('../models/article')

Router.get('/',function(req,res){
	res.render('admin/index')
})

// 获取文章
Router.post('/articl-list',function(req,res){
	
	ArticlModel.count({},function(err,total){
		ArticlModel.find({},null,{sort:{date:-1}},function(err,doc){
			if(err)throw err;
			res.json({
				code:0,
				message:'文章列表',
				data:doc,
				total:total
			})
		})
	})
	
})

// 添加文章
Router.post('/add',function(req,res){
	console.log(req.body);
	ArticlModel.create(req.body,function(err,doc){
		if(err)throw err;
		res.json({
			code:0,
			message:'文章发表成功'
		})
	})
})

module.exports = Router;