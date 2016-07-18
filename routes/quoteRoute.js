const Router = require('express').Router;
const Quote = require(__dirname + '/../models/quoteModel.js');
const bodyParser = require('body-parser').json();
const errorHandler = require(__dirname + '/../lib/errorHandler.js');
var quoteRouter = module.exports = new Router();


quoteRouter.get('/quote', (req, res) => {
  Quote.find({}, (err, data) => {
    if (err) errorHandler(err, res);
    res.status(200).json(data);
  });
});

quoteRouter.post('/quote', bodyParser, (req, res) => {
  var newQuote = new Quote(req.body);
  newQuote.save((err, data) => {
    if (err) errorHandler(err, res);
    res.status(200).json(data);
  });
});

quoteRouter.put('/quote/:id', bodyParser, (req, res) => {
  var quoteData = req.body;
  delete quoteData._id;
  Quote.update({ _id: req.params.id }, (err) => {
    if (err) errorHandler(err, res);
    res.status(200).json({ msg: 'Updated a quote' });
  });
});

quoteRouter.delete('/quote/:id', bodyParser, (req, res) => {
  Quote.findOneAndRemove({ _id: req.params.id }, (err) => {
    if (err) errorHandler(err, res);
    res.status(200).json({ msg: 'Delete a quote'});
  });
});
