const  mongoose = require ('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
    contenue: {type:String, default :'', required: true}, // String is shorthand for {type: String}
    users : {type : mongoose.Types.ObjectId , ref : 'users'},
  }),

  const Vote = mongoose.model('votes', voteSchema);

  module.exports= Vote;




// vote : API CRATION  ok
// API TEST PR LE NBR 
