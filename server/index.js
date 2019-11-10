const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
let fallback = require('express-history-api-fallback')
const MongoClient = require("mongodb").MongoClient;

const { configRoutes } = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = 8060;



// configure mongo db
const MONGO_URI =
  "mongodb://stevemu.com:27017/freebie";
const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });

client.connect((err) => {
  let db = client.db("freebie-connect");

  app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).json({error: err});
    }
    next();
  });

  app.use((req, res, next) => {
    req.db = db;
    next();
  })

  configRoutes(app);

  // add fake data
  // let {initOffers, initRequests} = require("./mocks");
  // initOffers(db);
  // initRequests(db);

  switch (process.env.NODE_ENV) {
    case "production":
      app.use("/", express.static(path.resolve(__dirname, "../client/build")));
      app.use(fallback('index.html', { root: `${__dirname}/../client/build` }))
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
})
