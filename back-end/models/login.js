const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true},
    password: {
        type: String, 
        required: true},
    user_id: {
        type: String, 
        required: true}
});
// = new mongoose.Schema({fname:String,lname:String})
const Login = mongoose.model("Login", LoginSchema);
module.exports = Login