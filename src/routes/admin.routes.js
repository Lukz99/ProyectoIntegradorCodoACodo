const express = require('express');
const upload = require('../middlewares/uploadFiles');
const { admin, createView, createItem, editView, editItem, deleteItem } = require('../controllers/admin.controllers');
const router = express.Router();

const isLogged = (req, res, next) => {
    if(req.session.isLogged) {
        next();
    } else {
        res.status(401).send('Debe logearse para ingresar a esta vista');
    }
}

router.get('/', isLogged, admin);
router.get('/create', isLogged, createView);
router.post('/create', upload.array('imagen', 2), createItem);
router.get('/edit/:id', isLogged, editView);
router.put('/edit/:id', upload.array('imagen', 2), editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;