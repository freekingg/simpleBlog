var express = require('express')
var Router = express.Router()

var ArticlModel = require('../models/article')
var UserlModel = require('../models/user')

// 登录
Router.get('/login',function(req,res){
	// 判断是否有session,如果有直接进入管理页面
	if(req.session.userName){res.redirect('/admin')}
	res.render('admin/login')
})

Router.post('/login',function(req,res){
	UserlModel.find({userName:req.body.userName})
	.then((result) => {
		console.log(result);
		if(!result.length){
			res.json({
				code:1,
				message:'没有此用户',
			})
		}else{
			if(req.body.password == result[0].password){
				// 登录成功，设置 session
				req.session.userName = result[0].password; 
				res.json({
					code:0,
					message:'登陆成功',
				})
			}else{
				res.json({
					code:1,
					message:'登陆失败',
				})
			}
		}
	})
	.catch((err) => {
		console.log(err);
	});
})



// 获取文章
Router.post('/articl-list',function(req,res){
	ArticlModel.countDocuments({},function(err,total){
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
	ArticlModel.create(req.body,function(err,doc){
		if(err)throw err;
		res.json({
			code:0,
			message:'文章发表成功'
		})
	})
})

// 修改文章
Router.post('/update',function(req,res){
	ArticlModel.update({_id:req.body.articlId},{title:req.body.title,content:req.body.content},function(err,doc){
		if(err)throw err;
		res.json({
			code:0,
			message:'修改成功'
		})
	})
})

// 删除文章
Router.post('/delete',function(req,res){
	ArticlModel.remove({_id:req.body.articlId},function(err){
		if(err)throw err;
		res.json({
			code:0,
			message:'删除成功'
		})
	})
})

Router.get('/',function(req,res){
	// 判断是否有session,如果有进入管理页面
	if(req.session.userName){
		res.render('admin/index')
	}else{
		res.redirect('/admin/login')
	}
})

module.exports = Router;