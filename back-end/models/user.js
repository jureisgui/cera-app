const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String, 
        required: true},
    last_name: {
        type: String, 
        required: true},
    email: {
        type: String,
        required: true},
    phone_number: {
        type: Number,
        required: true},
    address: {
        type: String,
        required: true},
    seller_image: {
        type: String,
        required: false},
    seller_name: {
        type: String,
        required: false},
    description: {
        type: String,
        required: false},
    my_listings: {
        type: Array,
        required: true},

    });
// = new mongoose.Schema({fname:String,lname:String})
const User = mongoose.model("User", UserSchema);
module.exports = User