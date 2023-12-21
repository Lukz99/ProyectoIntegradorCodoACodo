const path = require('path');

const credentials = {
    email: "pepe@gmail.com",
    password: "pepe123"
}

const authControllers = {
    login: (req, res) =>{
        res.render(path.resolve(__dirname,'../views/auth/login.ejs'),{
            title: "Login"
        });},

    doLogin: (req, res) => {
        const { email, password } = req.body;
        const validateEmail = credentials.email == email;
        const validatePassword = credentials.password == password;
        req.session.isLogged = (validateEmail && validatePassword);
        if (req.session.isLogged) {
            res.locals.isLogged = true;
            res.redirect('/admin');
        } else {
            res.redirect('/auth/login');
        }
    },

    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/auth/register.ejs'),{
            title: "Registro"
        });},

    registerRoute: (req, res) => res.send('Esta es la ruta que Crea un nuevo usuario'),

    logout: (req, res) => {
       req.session.isLogged = false;
       res.locals.isLogged = false;
       res.redirect('/home');
    }
}

module.exports = authControllers;