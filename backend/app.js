const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get('/', (req, res) => {
    res.send('Hello Eshop !');
});

app.listen(3000, () => {
    console.log(api);
    console.log('Server is running on port 3000');
});