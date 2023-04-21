const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) =>
{
    let q = req.url
   

    if (q == '/about')
    {
        console.log("About page");

        res.writeHead(200, { 'Content-type': 'text/html' })

        let content = fs.readFileSync('./pages/about.html')
        res.write(content)
        res.end()
    }
    else if (q == '/')
    {
        console.log("Home Page");
        res.writeHead(200, { "Content-type": "text/html" });

        let content = fs.readFileSync("./pages/home.html");
        res.write(content);
        res.end();
    }
    else if (q == '/contact')
    {
        console.log("Contact Page");

        res.writeHead(200, { 'Content-type': 'text/html' })

        let content = fs.readFileSync('./pages/contact.html')
        res.write(content)
        res.end()
    }
}).listen(9999);