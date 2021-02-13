const express = require('express');

const app = express();

app.use(express.static('./dist/socios'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/socios/' }),
);

app.listen(process.env.PORT || 8080);

console.log("Server started")