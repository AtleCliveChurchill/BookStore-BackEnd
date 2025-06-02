const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    quantity: Number,
    copiesSold: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
