const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const { configRoutes } = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let port = 7500;

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
