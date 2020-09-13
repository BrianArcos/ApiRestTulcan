const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req, res)=> {
    mysqlConnection.query( 'SELECT * FROM monumentos ',(err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });

    router.get('/:id', (req,res) => {
        const {id } = req.params;
        mysqlConnection.query('SELECT * FROM monumentos where idmonumentos =?',[id],(err, rows, fields) => {
            if(!err) {
                res.json(rows[0]);
            }else {
                console.log(err);
            } 
        });
    });
    
});

module.exports = router;
