const mongoose = require('mongoose');
require('dotenv/config');


mongoose.connect(process.env.DB_CONECCTION, { useNewUrlParser: true }, () => {
    console.log('conectado a la db');
});