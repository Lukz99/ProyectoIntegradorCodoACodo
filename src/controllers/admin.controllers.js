const path = require('path');
const { getAll, getOne } = require('../models/product.model');

const adminControllers = {
    admin: async (req, res) => {
        const data = await getAll();
         res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title: "Admin",
            data,
        });},
    createView: async (req, res) => {
        const data = await getAll();
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'),{
            title: "Crear item",
            data
        });},
    createItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    editView: async (req, res) =>  {
        const { id } = req.params;
        
        const [item] = await getOne({ product_id: id});
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title: "Editar item",
            item
        });
        
    
    },
    editItem: (req, res) => res.send('esta es la vista para realizar la modificacion'),
    deleteItem: (req, res) => res.send('Esta es la vista para eliminar item'),

    // (req, res) => {
    //     const { id } = req.params;
    
    //     res.send(`Usted quiere eliminar su item: ${id}`)}),
}

module.exports = adminControllers
getAll,
getOne;