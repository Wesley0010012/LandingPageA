const express = require('express');
const exphbs = require('express-handlebars');

const path = require('path');
const bodyParser = require('body-parser');

const hbs = exphbs.create({
  extname: '.hbs',
  partialsDir: './views/partials'
});

const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.set(bodyParser.urlencoded({extended: false}));
app.set(bodyParser.json());

const mainRouter = require('./server/routes/mainrouter');

app.get('*', mainRouter);
app.set('*', mainRouter);

app.listen(port, () => {
  console.log(`Listening in ${port}.`);
});