console.log("HELLO WORLD");
const fs = require("fs");
const http = require("http");
var generator = require("generate-password");
var nodemailer = require("nodemailer");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});
server.listen(3000, () => server.address().port);

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("famma 8alta fil :", err);
  } else {
    console.log("Hello Node");
  }
});

fs.readFile("Hello.txt", (err, data) => {
  if (err) {
    console.error("famma 8alta fil :", err.toString());
  } else {
    console.log(data.toString());
  }
});

password = generator.generateMultiple(5, {
  length: 10,
  numbers: true,
});
console.log(password);

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aaaaaaaa@gmail.com",
    pass: "aaaaa bbbbb ccccc ddddd",
  },
});

var mailOptions = {
  from: "aaaaaaaa@gmail.com",
  to: "bbbbbbbb@gmail.com",
  subject: "test",
  text: "wsel?",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
