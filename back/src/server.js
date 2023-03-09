const app = require("./app")
const https = require("https")
const http = require("http")
const fs = require("fs")
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 8080;

const server =
  process.env.ENV === "dev"
    ? http.createServer(app)
    : https.createServer(
        {
          key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH),
          cert: fs.readFileSync(process.env.SSL_CERT_PATH),
        },
        app
      );

function requireHTTPS(req, res, next) {
  if (!req.secure) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

if (process.env.ENV === "prod") {
  app.use(requireHTTPS);
  app.enable("trust proxy");
}

server.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});