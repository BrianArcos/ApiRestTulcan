const mysql= require('mysql');

const mysqlConnection= mysql.createConnection({
    host:'localhost', 
    user:'root',      
    password:'root',
    database:'app_tulcan'
});

mysqlConnection.connect(function (err) {
    if(err){
        Console.log(err);
        return;
    } else{
        console.log('Db is connected');
    }

});

module.exports = mysqlConnection;