const Book = require('../models/book');

// GET all books
exports.getBooks = async (req, res) => {
    const { page = 1, search = "" } = req.query;
    const limit = 10;
    const query = {
        $or: [
            { title: { $regex: search, $options: 'i' } },
            { author: { $regex: search, $options: 'i' } }
        ]
    };
    const books = await Book.find(query)
        .skip((page - 1) * limit)
        .limit(limit);
    const count = await Book.countDocuments(query);
    res.json({ books, totalPages: Math.ceil(count / limit) });
};

// GET one book
exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
};

// POST new book
exports.createBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
};

// PUT update book
exports.updateBook = async (req, res) => {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

// DELETE book
exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).end();
};
