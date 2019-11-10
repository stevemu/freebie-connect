const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

const { configRoutes } = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = 7500;

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://stevemu.auth0.com/.well-known/jwks.json"
  }),
  audience: "https://freebie-connect-api.stevemu.com",
  issuer: "https://stevemu.auth0.com/",
  algorithms: ["RS256"]
});

app.use(jwtCheck);

configRoutes(app);

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({});
  }
});

switch (process.env.NODE_ENV) {
  case "production":
    app.use("/", express.static(path.resolve(__dirname, "../web/build")));
    app.listen(port, null, () => {
      console.log("production server is running on " + port);
    });
    break;
  default:
    // app.use(cors());
    app.listen(port, null, () => {
      console.log("dev server is running on " + port);
    });
    break;
}
