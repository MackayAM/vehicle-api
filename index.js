const express = require('express');
const request = require('request');
const app = express();

app.get('/vehicle/:registrationNumber', (req, res) => {
    const registrationPlate = req.params.registrationNumber;
    request(`http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=${registrationPlate}`, { json: true }, (err, response, body) => {
        if (err) { return res.status(500).send(err); }
        res.send(body);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});