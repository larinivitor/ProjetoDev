const express = require('express');
const app = express();
const cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UsuarioCtrl = require('./controllers/UsuarioController');
const InstituicaoCtrl = require('./controllers/InstituicaoController');
const LoginCtrl = require('./controllers/LoginController');

app.get('/', (req, res) => {
	res.json({});
});

app.post('/login', LoginCtrl.login);

app.get('/usuarios', UsuarioCtrl.index);
app.post('/usuarios', UsuarioCtrl.create);
app.get('/usuarios/:id', UsuarioCtrl.find);
app.put('/usuarios/:id', UsuarioCtrl.update);
app.delete('/usuarios/:id', UsuarioCtrl.destroy);

app.get('/instituicoes', InstituicaoCtrl.index);
app.post('/instituicoes', InstituicaoCtrl.create);
app.get('/instituicoes/:id', InstituicaoCtrl.find);
app.put('/instituicoes/:id', InstituicaoCtrl.update);
app.delete('/instituicoes/:id', InstituicaoCtrl.destroy);


app.listen(3333);