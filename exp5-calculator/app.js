const http = require('http');
const url = require('url');
const fs = require('fs');
const calculator = require('./modulo');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    if (path === '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (path === '/add') {
        const query = url.parse(req.url, true).query;
        const result = calculator.add(parseFloat(query.num1), parseFloat(query.num2));
        const responseHTML = `<div style="background-image: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff; padding: 20px; margin: 20px auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); width: 300px; height: 150px; text-align: center;">
                                <h2>Addition Result:</h2>
                                <p style="font-size: 20px;">${query.num1} + ${query.num2} = ${result}</p>
                              </div>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    } else if (path === '/sub') {
        const query = url.parse(req.url, true).query;
        const result = calculator.subtract(parseFloat(query.num1), parseFloat(query.num2));
        const responseHTML = `<div style="background-image: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff; padding: 20px; margin: 20px auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); width: 300px; height: 150px; text-align: center;">
                                <h2>Subtraction Result:</h2>
                                <p style="font-size: 20px;">${query.num1} - ${query.num2} = ${result}</p>
                              </div>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    } else if (path === '/mul') {
        const query = url.parse(req.url, true).query;
        const result = calculator.multiply(parseFloat(query.num1), parseFloat(query.num2));
        const responseHTML = `<div style="background-image: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff; padding: 20px; margin: 20px auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); width: 300px; height: 150px; text-align: center;">
                                <h2>Multiplication Result:</h2>
                                <p style="font-size: 20px;">${query.num1} * ${query.num2} = ${result}</p>
                              </div>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    } else if (path === '/divide') {
        const query = url.parse(req.url, true).query;
        const result = calculator.divide(parseFloat(query.num1), parseFloat(query.num2));
        const responseHTML = `<div style="background-image: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff; padding: 20px; margin: 20px auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); width: 300px; height: 150px; text-align: center;">
                                <h2>Division Result:</h2>
                                <p style="font-size: 20px;">${query.num1} / ${query.num2} = ${result}</p>
                              </div>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    } else if (path === '/power') {
        const query = url.parse(req.url, true).query;
        const result = calculator.power(parseFloat(query.num1), parseFloat(query.num2));
        const responseHTML = `<div style="background-image: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff; padding: 20px; margin: 20px auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); width: 300px; height: 150px; text-align: center;">
                                <h2>Power Result:</h2>
                                <p style="font-size: 20px;">${query.num1} ^ ${query.num2} = ${result}</p>
                              </div>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    } else if (path === '/modulo') {
        const query = url.parse(req.url, true).query;
        const result = calculator.modulo(parseFloat(query.num1), parseFloat(query.num2));
        const responseHTML = `<div style="background-image: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff; padding: 20px; margin: 20px auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); width: 300px; height: 150px; text-align: center;">
                                <h2>Modulo Result:</h2>
                                <p style="font-size: 20px;">${query.num1} % ${query.num2} = ${result}</p>
                              </div>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running...');
});
