const  mongoose = require ('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
    contenue:  {type:String, default :' ', required: true}, // String is shorthand for {type: String}
    users : {type : mongoose.Types.ObjectId , ref : 'users'},

  }),


// vote : API CRATION  
// API TEST PR LE NBR 
