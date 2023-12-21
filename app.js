const express           = require('express');
const path              = require('path');
const methodOverride    = require('method-override');
const mainRoutes        = require('./src/routes/main.routes');
const shopRoutes        = require('./src/routes/shop.routes');
const adminRoutes       = require('./src/routes/admin.routes');
const authRoutes        = require('./src/routes/auth.routes');
const { initSession }   = require('./src/middlewares/session');
const app               = express();
const PORT              = 3300;

// template Engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./src/views"));

// Crear sesión

app.use(initSession());
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});


// Middlewarea de configuración 

app.use(express.static('public'));





app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

// Rutas

app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/', mainRoutes);

app.listen(PORT, () => console.log(`🆗 Servidor corriendo en http://localhost:${PORT}`));