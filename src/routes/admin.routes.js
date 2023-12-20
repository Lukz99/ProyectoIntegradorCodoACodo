const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { admin, createView, createItem, editView, editItem, deleteItem } = require('../controllers/admin.controllers');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img/products')),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

router.get('/', admin);
router.get('/create', createView);
router.post('/create', createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', editItem);
router.delete('delete/:id', deleteItem);

module.exports = router;