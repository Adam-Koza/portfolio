const mongoose = require('mongoose');

const PortfolioSchema = mongoose.Schema({
    name: String,
    holdings: [{
        symbol: String,
        quantity: Number,
        buyPrice: Number 
    }]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);