const express = require('express');
const upload = require('../middlewares/uploadFiles');
const { admin, createView, createItem, editView, editItem, deleteItem } = require('../controllers/admin.controllers');

const router = express.Router();



router.get('/', admin);
router.get('/create', createView);
router.post('/create', upload.array('imagen', 2), createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', upload.array('imagen', 2), editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;