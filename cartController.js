const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const { bookId, quantity } = req.body;
  const cartItem = await Cart.findOne({ bookId });

  if (cartItem) {
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    const newItem = new Cart({ bookId, quantity });
    await newItem.save();
  }

  res.status(200).json({ message: 'Book added to cart' });
};

exports.getCart = async (req, res) => {
  const cartItems = await Cart.find();
  res.json(cartItems);
};
