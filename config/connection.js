var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'wq1u3k8h5s3ivju1',
    password: 'o8nibv7y27s0efvc',
    database: 'xzoc3rqm6tzhxhnx'
  });
  
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;