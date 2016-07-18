const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const quoteRouter = require(__dirname + '/routes/quoteRoute.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/quote_db');

app.use('/api', quoteRouter);

app.listen(PORT, () => console.log('server up at port ' + PORT));
