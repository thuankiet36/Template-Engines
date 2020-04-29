// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');
app.set('views', './views');

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

app.get('/todos', (request, response) => {
  response.render('index.pug', {
    activities : [
      {id: 0, name:"Đi chợ"},
      {id: 0, name:"Nấu cơm"},
      {id: 0, name:"Rửa bát"},
      {id: 0, name:"Học code tại CodersX"}
    ]
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
