const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req, res)=> {
    mysqlConnection.query( 'SELECT * FROM serv_generales where idserv_Generales <= 27 ',(err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });

    router.get('/:id', (req,res) => {
        const {id } = req.params;
        mysqlConnection.query('SELECT * FROM serv_generales where idserv_Generales =?',[id],(err, rows, fields) => {
            if(!err) {
                res.json(rows[0]);
            }else {
                console.log(err);
            } 
        });
    });
    
});

module.exports = router;
