var express = require('express')
var Router = express.Router()

var ArticlModel = require('../models/article')

Router.get('/',function(req,res){
	res.render('html/details')
})

module.exports = Router;