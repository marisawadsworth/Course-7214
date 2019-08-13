const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}, How are you?`)
})

app.get('/someOtherData', (req, res) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => res.send(data))
})

app.get('/api', (req, res) => {
    const json = JSON.stringify([{name: "Marisa"}, {name: "Jeff"}, {name: "Sadaf"}])
    res.send(json)
})

app.get('*', (req, res) => {
    res.send("Your endpoint must be /hello/:name");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});


//Run app, then load http://localhost:port in a browser to see the output.