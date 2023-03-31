// required packages
const express = require("express")
// app config
const app = express()
const PORT = 8080
///tell express to use ejs to render templates
app.set('view engine', 'ejs')

// define routes

app.get('/', (req, res) => {
    res.render('index.ejs', {
        name: "Sterling Archer",
        age: 10,
        fruits: ['apple', 'orange', 'kiwi', 'pineapple']
    })
})


app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

// GET /blog -- a page of my blogs
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog-directory.html')
})

// listen on a port
app.listen(PORT, () => console.log(`express app fired up and listening on ${PORT} `))