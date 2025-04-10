const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Cart', CartSchema);
