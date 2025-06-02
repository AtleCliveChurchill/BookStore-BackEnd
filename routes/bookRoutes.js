const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

// Helper: Validate book input
const validateBook = (book) => {
    const { title, author, quantity, copiesSold } = book;
    if (!title || !author || quantity == null || copiesSold == null) {
        return "All fields are required.";
    }
    if (quantity < 0 || copiesSold < 0) {
        return "Quantity and copies sold must be non-negative.";
    }
    return null;
};

// GET all books
router.get('/', async (req, res) => {
    try {
        const { search = '', page = 1 } = req.query;
        const limit = 10;
        const skip = (page - 1) * limit;
        const query = {
            $or: [
                { title: new RegExp(search, 'i') },
                { author: new RegExp(search, 'i') }
            ]
        };
        const books = await Book.find(query).skip(skip).limit(limit);
        const count = await Book.countDocuments(query);
        res.json({ books, total: count });
    } catch (err) {
        res.status(500).json({ message: "Failed to get books." });
    }
});

// GET one book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found." });
        res.json(book);
    } catch (err) {
        res.status(400).json({ message: "Invalid book ID." });
    }
});

// ADD book
router.post('/', async (req, res) => {
    const error = validateBook(req.body);
    if (error) return res.status(400).json({ message: error });

    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: "Failed to add book." });
    }
});

// UPDATE book
router.put('/:id', async (req, res) => {
    const error = validateBook(req.body);
    if (error) return res.status(400).json({ message: error });

    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: "Book not found." });
        res.json(book);
    } catch (err) {
        res.status(400).json({ message: "Invalid book ID or update failed." });
    }
});

// DELETE book
router.delete('/:id', async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: "Book not found." });
        res.json({ message: "Book deleted." });
    } catch (err) {
        res.status(400).json({ message: "Invalid book ID." });
    }
});

module.exports = router;
