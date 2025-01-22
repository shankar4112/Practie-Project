const http = require("http");
const fs = require("fs");
const server = http.createServer(function (request, response) {
    if (request.url === "/exp1") {
        fs.readFile("index.html", function (err, data) {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
                return response.end("404 Not Found");
            }
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            return response.end();
        });
    } else if (request.url === "/exp2") {
        fs.readFile("cgpa.html", function (err, data) {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
                return response.end("404 Not Found");
            }
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            return response.end();
        });
    }
     else {
        response.end("Invalid Request");
    }
});

server.listen(3000);

console.log("Server running");