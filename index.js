const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');

const staticWeb = path.join(__dirname, './public');
const templet = path.join(__dirname, './templet');

// to set the vue engine
app.set('view engine', 'hbs');
// if you  change name of "views" File
app.set('views', templet);

// app.use(express.static(staticWeb));

// templet engine route
app.get('/', (req, res) => {
  res.render('index', {
    text: 'i am from index.js file',
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/about/*', (req, res) => {
    res.render('error', {
        text: 'dont found anything inside about us page',
    });
});

app.get('*', (req, res) => {
  res.render('error', {
    text: 'note found this page',
  });
});
app.use('/', (req, res) => {
  res.send('hello everyone');
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
