const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');

const staticWeb = path.join(__dirname, './public');
// to set the vue engine
app.set('view engine', 'hbs');

// app.use(express.static(staticWeb));

// templet engine route
app.use('/', (req, res) => {
    res.render('index',{
        text : "i am from index.js file"
    });
});
app.use('/', (req, res) => {
  res.send('hello everyone');
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
