const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required:true},
    article: {type: String, required:true},
    authorname:{type: String, required:true}
}); //the necessary arguments we need to be given. this is the schema we need
//types and names of the stuff in the page

const Articles=mongoose.model("Articles", articleSchema);

module.exports=Articles;