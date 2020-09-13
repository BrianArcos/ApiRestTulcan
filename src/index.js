const  express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json space',2);

//Middlewares
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use(require('./routes/index'));
app.use('/api/hostales',require('./routes/hostales'));
app.use('/api/hoteles',require('./routes/hoteles'));
app.use('/api/restaurantes',require('./routes/restaurantes'));
app.use('/api/cafeterias',require('./routes/cafeterias'));
app.use('/api/discotecas',require('./routes/discotecas'));
app.use('/api/bares',require('./routes/bares'));
app.use('/api/atractivos',require('./routes/atractivos'));
app.use('/api/operadores',require('./routes/operadores'));
app.use('/api/transporte',require('./routes/transporte'));
app.use('/api/complejos',require('./routes/complejos'));
app.use('/api/monumentos',require('./routes/monumentos'));
app.use('/api/otros',require('./routes/otros'));
app.use('/api/iglesias',require('./routes/iglesias'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));


});