//Setting up all the dependencies and middleware
require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const {v4 : uuidv4} = require('uuid');

const sequelize = require('./connection/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3030;

const hbs = exphbs.create({});

//Setting up the connections
const sess = {
    secret: uuidv4(),
    cookie: {

        //1 hour
        maxAge: 3600000
    },
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

//calling the session
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.session);
    next();
})

//Routing API to controllers folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(routes);

//Syncing the database and starting the server
sequelize.sync({ 
    force: false 
}).then(() => {
    app.listen(PORT, () => console.log(`IM LISTENING HERE http://localhost:${PORT}, HURRY UP!`));
});
