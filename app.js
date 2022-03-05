const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen(3001, () =>
    console.log('Get your sore, sleeping butt cheeks over to http://127.0.0.1:3001')
    );
