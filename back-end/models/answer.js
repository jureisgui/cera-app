const mongoose = require('mongoose');
const AnswerSchema = new mongoose.Schema({
    answer_input: {
        type: String, 
        required: true},
    question_id: {
        type: String, 
        required: true},
    seller_image: {
        type: String,
        required: true},
});
// = new mongoose.Schema({fname:String,lname:String})
const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer