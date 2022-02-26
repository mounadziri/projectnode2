const  mongoose = require ('mongoose');
const { Schema } = mongoose;

const subjectsSchema = new Schema({
    title:  {type:String, default :'hello', required: true}, // String is shorthand for {type: String}
    description : String,
    vote : {type : mongoose.Types.ObjectId , ref : 'vote'},
  },{
      // best practce
      versionKey: false,// for desactiving __v on mongoDB,
      timestamps: true  // time of update and time of creation(creatAT, updaeAT)
  });
  
  // create the subject model té5ou comme parametre ismhom fel base(todos) de donné w ism Schema(todosSchema)
  const Subject = mongoose.model('subjects', subjectsSchema);
  
  //export model to use it in an other place
  module.exports= Subject;
  