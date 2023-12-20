const path = require('path');
const { getAll, getOne } = require('../models/product.model');

const mainControllers = {
    home: async (req, res) => {
        const data = await getAll();
        res.render('home',{
            title: "Home",
            data
        });},
       
    contact: (req, res) => {
        res.render(path.resolve(__dirname,'../views/main/contact.ejs'),{
            title: "Contacto"
        });},
    about: (req, res) => res.send('Esta es la vista sobre nosotros'),
    faqs: (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'),
    }


module.exports = mainControllers,
getAll, 
getOne;
