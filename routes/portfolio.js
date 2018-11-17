module.exports = (app) => {
    const portfolio = require('../controllers/portfolio.js');

    // Create a new portfolio
    app.post('/portfolio', portfolio.create);

    // Retrieve all portfolios
    app.get('/portfolio', portfolio.findAll);

    // Retrieve a single portfolio with portfolioId
    app.get('/portfolio/:portfolioId', portfolio.findOne);

    // Update a portfolio with portfolioId
    app.put('/portfolio/:portfolioId', portfolio.update);

    // Delete a portfolio with portfolioId
    app.delete('/portfolio/:portfolioId', portfolio.delete);
}