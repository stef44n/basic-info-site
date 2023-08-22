var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;

        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;

        case "/contact-me":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        case "/contact":
            res.statusCode = 301;
            res.setHeader("Location", "/contact-me");
            res.end();
            break;

        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, function (err, data) {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.writeHead(200, { "Content-Type": "text/html" });
            // res.write(data);
            return res.end(data);
        }
    });
}).listen(8080);
