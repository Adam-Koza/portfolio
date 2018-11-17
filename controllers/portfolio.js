const Portfolio = require('../models/portfolio.js');

// Create and Save a new portfolio
exports.create = (req, res, next) => {
    // Validate request
    if(!req.body.holdings) {
        return res.status(400).send({
            message: "portfolio holdings can not be empty"
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
            message: err.message || "Error occurred while creating the Portfolio."
        });
    });
};

// Retrieve and return all portfolios from the database.
exports.findAll = (req, res, next) => {
    Portfolio.find()
    .then(portfolios => {
        res.send(portfolios);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving portfolios."
        });
    });
};

// Find a single portfolio with a portfolioId
exports.findOne = (req, res, next) => {
    Portfolio.findById(req.params.portfolioId)
    .then(portfolio => {
        if(!portfolio) {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.portfolioId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.portfolioId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.portfolioId
        });
    });
};

// Update a portfolio identified by the portfolioId in the request
exports.update = (req, res, next) => {
    // Validate Request
    if(!req.body.holdings) {
        return res.status(400).send({
            message: "Portfolio holdings can not be empty"
        });
    }

    // Find portfolio and update it with the request body
    Portfolio.findByIdAndUpdate(req.params.portfolioId, {
        name: req.body.name || "Unnamed Portfolio",
        holdings: req.body.holdings
    }, {new: true})
    .then(portfolio => {
        if(!portfolio) {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.portfolioId
            });
        }
        res.send(portfolio);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.portfolioId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.portfolioId
        });
    });
};


// Delete a portfolio with the specified portfolioId in the request
exports.delete = (req, res, next) => {
    Portfolio.findByIdAndRemove(req.params.noteId)
    .then(portfolio => {
        if(!portfolio) {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.portfolioId
            });
        }
        res.send({message: "Portfolio deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.portfolioId
            });                
        }
        return res.status(500).send({
            message: "Could not delete portfolio with id " + req.params.portfolioId
        });
    });
};