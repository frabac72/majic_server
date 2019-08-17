const express = require('express')

const app = express();

app.get('/', (req, resp) => {
    console.log('bah');
    resp.status(200).send(req.headers);
});

const port = 12000;
app.listen(port, () => {
    console.log(`Majic_server listnening on port ${port}`)
});


