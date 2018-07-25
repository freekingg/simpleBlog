var express = require('express')
var Router = express.Router()

var ArticlModel = require('../models/article')
Router.get('/test',function(req,res,next){
	res.json({'ok':'ok'})
})

Router.get('/',function(req,res){
	// 获取所有文章，并传递页面
	ArticlModel.find({},null,{sort:{date:-1}},function(err,doc){
		if(err)throw err;
		res.render('html/index',{artcleDate:doc})
	})
})

module.exports = Router;