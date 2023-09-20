const express = require('express');
const morgan = require('morgan');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some url'
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
});

app.listen(3000, () => {
    
    console.log('Server is running on port 3000');
});