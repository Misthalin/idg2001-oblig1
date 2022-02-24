const http = require("http");
const host = 'localhost';
//const host = '[Heroku URL without the https://]';
const port = 8080;

const requestListener = function (req, res) {
    if (req.method = "GET") {
        res.writeHead(200);
        res.end("My first server!");
    } else if (req.method = "POST") {
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });
        req.on("end", function () {
            res.writeHead(200);
            res.end(body);
            console.log(body)
        });
    }
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || port, () => {
    console.log(`Server is running on http://${host}}`);
   });

//axios.post(`https://${host}`, "test")