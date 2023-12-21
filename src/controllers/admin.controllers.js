const path = require('path');
const { getAll, getOne, create, edit, deleteOne,} = require('../models/product.model');

const adminControllers = {
    admin: async (req, res) => {
        const data = await getAll();
         res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title: "Admin",
            data,
        });},

    createView: async (req, res) => {
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'),{
            title: "Crear item"
        });},

    createItem: async (req, res) => {
        console.log(req.body)
        console.log(req.files)
        const product_schema = {
            product_name: req.body.nombre,
            product_description: req.body.descripcion,
            category_id: Number(req.body.categoria),
            licence_id: Number(req.body.licencia),
            sku: req.body.sku,
            price: Number(req.body.precio),
            stock: Number(req.body.stock),
            discount: Number(req.body.descuento),
            dues: Number(req.body.cuotas),
            image_front: '/products/'+req.files[0].filename, 
            image_back: '/products/'+req.files[1].filename,
        }

        await create([Object.values(product_schema)]);

        res.redirect('/admin');
        // TODO - MANEJO DE ERROR
        /*const result = await create([Object.values(product_schema)]);
        console.log("array: ", [Object.values(product_schema)])
        res.send('Esta es la ruta para agregar un item: ' + result);
        */
    },

    editView: async (req, res) =>  {
        const { id } = req.params;
        
        const [item] = await getOne({ product_id: id});
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title: "Editar item",
            item
        });    
    },

    editItem: async (req, res) => {
        const { id } = req.params;
        const newImages = req.files.length !== 0;
        console.log("el nombre es: ", req.body.nombre)
        const product_schema = newImages ? {
            product_name: req.body.nombre,
            product_description: req.body.descripcion,
            category_id: Number(req.body.categoria),
            licence_id: Number(req.body.licencia),
            sku: req.body.sku,
            price: Number(req.body.precio),
            stock: Number(req.body.stock),
            discount: Number(req.body.descuento),
            dues: Number(req.body.cuotas),
            image_front: '/products/' + req.files[0].filename, 
            image_back: '/products/' + req.files[1].filename,
        }
        : {
            product_name: req.body.nombre,
            product_description: req.body.descripcion,
            category_id: Number(req.body.categoria),
            licence_id: Number(req.body.licencia),
            sku: req.body.sku,
            price: Number(req.body.precio),
            stock: Number(req.body.stock),
            discount: Number(req.body.descuento),
            dues: Number(req.body.cuotas),
        }
        await edit(product_schema, {product_id: id});
        res.redirect('/shop');
    },

    deleteItem: async (req, res) => {
        const { id } = req.params;
        await deleteOne({product_id: id});
        res.redirect('/admin');
    }
}

module.exports = adminControllers;