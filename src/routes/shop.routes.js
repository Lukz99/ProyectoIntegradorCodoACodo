const express = require('express');
const router = express.Router();
const { shop, item, addItem, cart, addToCart } = require('../controllers/shop.controllers');

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', addItem);
router.get('/cart', cart);
router.post('/cart', addToCart)

module.exports = router;