const Portfolio = require('../models/portfolio.js');

// Create and Save a new portfolio
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "portfolio name can not be empty"
        });
    }

    // Create a Portfolio
    const portfolio = new Portfolio({
        name: req.body.name || "Unnamed portfolio", 
        holdings: req.body.holdings || []
    });

    // Save Portfolio in the database
    portfolio.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Portfolio."
        });
    });
};

// Retrieve and return all portfolios from the database.
exports.findAll = (req, res) => {

};

// Find a single portfolio with a portfolioId
exports.findOne = (req, res) => {

};

// Update a portfolio identified by the portfolioId in the request
exports.update = (req, res) => {

};
e
// Delete a portfolio with the specified portfolioId in the request
exports.delete = (req, res) => {

};