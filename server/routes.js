let {checkJwt} = require("./util/auth");
let {getAllRequests, createRequest} = require("./requests");

function configRoutes(app) {

  app.get("/requests", checkJwt, async (req, res) => {
    // console.log(req.user);
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
}

exports.configRoutes = configRoutes;
