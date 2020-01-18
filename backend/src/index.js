/*  nota: como parametro de .get() passei o endereço
    e uma arrow function que retorna a string(pesquisar depois)

    métodos HTTP: get, post, put, delete

    TIPOS DE PARAMETROS
    Query Params: request.query(filtros, ordenação, paginação...)

    Route Params: request.params(identificar um recurso na alteração ou remoção)

    Body: request.body(Dados para criação ou alteração de um registro)
*/

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();


mongoose.connect('mongodb+srv://Pedroca:vrapvrap777@cluster0-oo8gq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

