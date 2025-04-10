const express = require('express');
const { addItemToCart, getCartItems } = require('../controllers/cartController');

const router = express.Router();

// Thêm sản phẩm vào giỏ hàng
router.post('/add-item', addItemToCart);

// Lấy tất cả sản phẩm trong giỏ hàng
router.get('/items', getCartItems);

module.exports = router;
