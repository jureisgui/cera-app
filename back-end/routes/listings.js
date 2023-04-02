const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const Listing = require("../models/listing");

// GET (all) Listings route
router.get('/', async (req, res) => {
    const listings = await Listing.find();
    res.json(listings)
});

// POST new Listing
router.post('/addlisting', async (req, res) => {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save()
    res.json(savedListing)
});

// GET (single) Listing by ID
router.get('/getlisting/:id', async (req, res) => {
    const IDed_Listing = await Listing.findById({ _id : req.params.id });
    res.json(IDed_Listing)
});

// DELETE a Listing by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Listing = await Listing.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Listing)
});

// UPDATE a Listing by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Listing = await Listing.findByIdAndUpdate(
        { _id : req.params.id }, 
        { $set: req.body }
    );
    res.json(toUpdate_Listing)
});

module.exports = router