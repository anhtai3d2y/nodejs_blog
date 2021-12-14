const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const route = require('./routes')
const db = require('./config/db')

//Connect to DB
db.connect()

const app = express()
const port = 3000




app.use(express.static(path.join(__dirname, 'public')))

//Use with form
app.use(express.urlencoded({
        extended: true
    }))
    //Use with json from javascript
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'))

//Template engine
var hbs = exphbs.create({
    helpers: {
        sayHello: function() { alert("Hello World") },
        getStringifiedJson: function(value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
    partialsDir: ['src/resources/views/partials/'],
    extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})