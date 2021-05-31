const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const db = require('./db');

    const faker = require('faker');
    const name = faker.name.findName();

    db.query('INSERT INTO people(name) values (?)', name);

    db.query('SELECT * FROM people', (error, results, fields) => {
        if (error) {
            console.log(error);
        }

        let response = '<h1>Full Cycle Rocks!</h1>';
        
        if (results.length) {
            response += '<ul>';
            response += results.map((row) => `<li>${row.name}</li>`).join('');
            response += '</ul>';
        }
                
        res.send(response);
    });
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});