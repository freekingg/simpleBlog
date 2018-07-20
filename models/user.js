var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
	userName:String,
	password:String,
	date:{
		type:Date,
		default:Date.now
	}
})
var UserlModel = mongoose.model('User',UserSchema)
module.exports = UserlModel