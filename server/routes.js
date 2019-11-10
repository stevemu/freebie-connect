let {checkJwt} = require("./util/auth");
let {getAllRequests, createRequest} = require("./requests");
let {getAllOffers, createOffer} = require("./offers");

function configRoutes(app) {

  app.get("/requests", checkJwt, async (req, res) => {
    let docs = await getAllRequests(req.db);
    return res.json(docs);
  })

  app.post("/requests", checkJwt, async (req, res) => {
    let {title, city, desc} = req.body;
    let userId = req.user.sub;
    let db = req.db;

    let newR = {
      title, city, desc,
      createdBy: userId
    }
    let result = await createRequest(db, newR);
    return res.json({id: result.insertedId});
  })

  app.get("/offers", checkJwt, async (req, res) => {
    let docs = await getAllOffers(req.db);
    return res.json(docs);
  })

  app.post("/offers", checkJwt, async (req, res) => {
    let {title, city, desc} = req.body;
    let userId = req.user.sub;
    let db = req.db;

    let newR = {
      title, city, desc,
      createdBy: userId
    }
    let result = await createOffer(db, newR);
    return res.json({id: result.insertedId});
  })
}

exports.configRoutes = configRoutes;
