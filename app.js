const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/post', async(req, res)=>{
    res.status(200).json("Hello Sir");
})

app.listen(port);
console.log(`App running on http://localhost:${port}`);
