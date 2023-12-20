const path = require('path');
const { getAll, getOne, getAllByPage } = require('../models/product.model');

const shopControllers = {
    shop: async (req, res) => {
        const { page } = req.params;
        const LIMIT = 9;
        const OFFSET = page ? LIMIT * (page - 1) : 0;
        //const data = await getAllByPage(LIMIT, OFFSET);
        const data = await getAll();
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'),
            {
                title: "Tienda",
                data
            });
    },
    item: async (req, res) => {
        const data = await getAll();
        const itemId = req.params.id;
        const [item] = await getOne({ product_id: itemId });

        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Item",
            item,
            data
        });
    },
    addItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
            title: "Carrito"
        });
    },
    addToCart: (req, res) => res.send('Esta es la ruta para agregar un nuevo item al carrito'),
}

module.exports =
    shopControllers,
    getAll,
    getAllByPage,
    getOne;