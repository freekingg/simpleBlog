var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
	title:String,
	content:String,
	date:{
		type:Date,
		default:Date.now
	},
	comment:{
		type:Array
	}
})
var ArticlModel = mongoose.model('Articl',ArticleSchema)
module.exports = ArticlModel