const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//Query MySQL

const QUERY_SELECT_ATENDIMENTOS = 'SELECT * FROM atendimentos ORDER BY id_atendimento';
//const QUERY_SELECT_ATENDIMENTO = `SELECT * atendimentos WHERE id_atendimento= ('${cliente}','${solicitante}','${prioridade}','${situacao}','${responsavel}','${problema}','${solucao}')`;


//Fim Query MySQL

//Conexão MySql

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'gzzd@yu6s',
    database: 'atends',
    insecureAuth: true
});

connection.connect(err => {
    if (err) {
        return console.log(err);
    } else {
        console.log('connection mysql with success')
    }
});

//Testa conexão com banco
console.log(connection)

//Fim Conexão MySql

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello boy')
});

app.get('/atendimentos', (req, res) =>{
    connection.query(QUERY_SELECT_ATENDIMENTOS, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});


//Get um atendimento
app.get('/atendimentos/:id', (req, res) => {
    const obtemId = req.params.id;
    connection.query(`SELECT * FROM atendimentos WHERE id_atendimento = ${obtemId}`, (err, rows, fields) => {
        if (!err)
            res.json({data: rows});
        else
            res.send(err);
    })
});





app.get('/atendimentos/add', (req,res) => {
    const { cliente, solicitante, prioridade, situacao, responsavel, problema, solucao } = req.query;
    const QUERY_INSERT_ATENDIMENTO = `INSERT INTO atendimentos (cliente, solicitante, prioridade, situacao, responsavel, problema, solucao) VALUES ('${cliente}','${solicitante}','${prioridade}','${situacao}','${responsavel}','${problema}','${solucao}')`;

    connection.query(QUERY_INSERT_ATENDIMENTO, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send(results)
        }
    } );

} );



app.listen(4000, () => {
    console.log('Server run port 4000')
});