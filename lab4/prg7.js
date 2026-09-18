import http from "http";
import {getUsers} from "./users.js"
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>My Node Server</title>
        </head>
        <body>
          <h1>Hello from Node.js!</h1>
          <p>My server is working successfully.</p>
          <p>This page is being served from port 2000.</p>
        </body>
      </html>
    `);
  }
  else if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getUsers()));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    })
    req.on('end', () => {
      const user = JSON.parse(body);
      console.log(user);
    })
    res.end(JSON.stringify({ msg: "add user" }));
  } else if (req.url === "/api/users/2" && req.method === "GET")
    res.end(JSON.stringify({ msg: "single user with id 1" }));
  else if (req.url === "/api/users/1" && req.method == "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if (req.url === "/api/users/1" && req.method == "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } else {
    // res.statusCode = 404;
    res.end();
  }
});
server.listen(2000, () => {
  console.log("Server is running on port 2000");
});