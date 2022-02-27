const  mongoose = require ('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
    contenue: {type:String, default :'', required: true}, // String is shorthand for {type: String}
    user : {type : mongoose.Types.ObjectId , ref : 'user'},
    subject : {type : mongoose.Types.ObjectId , ref : 'subjects'},
    date : {type:Date,default:Date.now(),required:true} 
    
  })

  const Vote = mongoose.model('votes', voteSchema);

  module.exports= Vote;




// vote : API CRATION  ok
// API TEST PR LE NBR 
