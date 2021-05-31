const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
};

const connection = mysql.createConnection(config);

connection.connect((error) => {
    if (error) {
        console.log(`Connection error: ${error.stack}`);    
    }
});

module.exports = connection;