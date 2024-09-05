const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/users', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1/comments')
    .then(response => res.json(response.data))
    .catch(error => res.status(500).send(error));
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));
