const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/quote_db');

app.listen(PORT, () => console.log('server up at port ' + PORT));
