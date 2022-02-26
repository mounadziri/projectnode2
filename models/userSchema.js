const  mongoose = require ('mongoose');
const { Schema } = mongoose;

//user Schema
const userSchema = new Schema({
  firstname:  {type:String, required: true}, 
  lastname: String,
  email : {type: String , required : true , unique: true},
  password:  {type:String, required: true},
  age: Number,
  subjects : [{type : mongoose.Types.ObjectId , ref : 'subjects'}],
  votes : [{type : mongoose.Types.ObjectId , ref : 'votes'}],
},{versionKey : false , timestamps : true });

// create the user model
const User = mongoose.model('users', userSchema);

//export model to use it in an other place
module.exports= User;