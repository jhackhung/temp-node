const http = require('http')
const { readFileSync, read, readFile } = require("fs")

// get all files
const homepage = readFileSync("./navbar-app/index.html")
const homeStyle = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeLogic = readFileSync("./navbar-app/browser-app.js")

const server = http.createServer((req, res) => {
    // console.log(req)
    const url = req.url
    // Home page
    if(url === '/') {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write(homepage)
        res.end()
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // Style
    else if(url === './style.css'){
        res.writeHead(200, { 'content-type': "text/css" })
        res.write(homeStyle)
        res.end()
    }
    // image/logo
    else if(url === './logo.svg'){
        res.writeHead(200, { 'content-type': "image/svg" })
        res.write(homeImage)
        res.end()
    }
    // 404 page
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('Page not found')
        res.end()
    }
})

server.listen(5000) 