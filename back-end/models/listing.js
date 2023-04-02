const mongoose = require('mongoose');
const ListingSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true},
    subtitle: {
        type: String, 
        required: false},
    category: {
        type: String,
        required: true},
    item_description: {
        type: String,
        required: true},
    condition: {
        type: Boolean,
        required: true},
    dimentions: {
        width: {
            type: String,
            required: false},
        height: {
            type: String,
            required: false},
        diameter: {
            type: String,
            required: false},
        capacity: {
            type: String,
            required: false}},
        price: {
            type: Number,
            required: true},
        product_tags: {
            type: Array,
            required: true},
        product_images: {
            type: Array,
            required: true},
        pick_up: {
            type: Boolean,
            required: true},
        delivery: {
            type: Boolean,
            required: true},
    });
// = new mongoose.Schema({fname:String,lname:String})
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing