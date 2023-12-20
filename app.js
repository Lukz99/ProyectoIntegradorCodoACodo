const express = require('express');
const app = express();
const path = require('path');
// app.get('/home', (req, res) => res.sendFile(__dirname + '/public/index.html'))
// app.get('/ping', (req, res) => res.send('pong'));


const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');
//const initSession = require('./src/middlewares/session');

// template Engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./src/views"));


// Middlewarea de configuración 

app.use(express.static('public'));

/*app.use(initSession);
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});
*/
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

// routes

app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/', mainRoutes);
 
// app.use((req, res) => {
//     res.status(404).send('La pagina que buscas no existe.');
// })

app.listen(3300, () => console.log("servidor corriendo en http://localhost:3300"));
