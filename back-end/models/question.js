const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
    question_input: {
        type: String, 
        required: true},
    user_initials: {
        type: String, 
        required: true},
    product_id: {
        type: String,
        required: true},
});
// = new mongoose.Schema({fname:String,lname:String})
const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question
  
  




	
