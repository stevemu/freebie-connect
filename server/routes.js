let {checkJwt} = require("./util/auth");
let {getAllRequests} = require("./requests");

function configRoutes(app) {

  app.get("/requests", checkJwt, async (req, res) => {
    let docs = await getAllRequests(req.db);
    return res.json(docs);
  })

}

exports.configRoutes = configRoutes;
