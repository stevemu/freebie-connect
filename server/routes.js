let {checkJwt} = require("./util/auth");
let {getAllRequests, createRequest} = require("./requests");
let {getAllOffers, createOffer} = require("./offers");
let {updateProfile, getProfile} = require("./profile");

function configRoutes(app) {

  app.get("/api/requests", async (req, res) => {
    let docs = await getAllRequests(req.db);
    return res.json(docs);
  })

  app.post("/api/requests", checkJwt, async (req, res) => {
    let {title, city, desc} = req.body;
    let userId = req.user.sub;
    // let userEmail = req.user.email;
    let db = req.db;

    let newR = {
      title, city, desc,
      createdBy: userId,
      // createdByEmail: userEmail
    }
    let result = await createRequest(db, newR);
    return res.json({id: result.insertedId});
  })

  app.get("/api/offers", async (req, res) => {
    let docs = await getAllOffers(req.db);
    return res.json(docs);
  })

  app.post("/api/offers", checkJwt, async (req, res) => {
    let {title, city, desc} = req.body;
    let userId = req.user.sub;
    // let userEmail = req.user.email;
    // console.log(req.user);
    let db = req.db;

    let newR = {
      title, city, desc,
      createdBy: userId,
      // createdByEmail: userEmail
    }
    let result = await createOffer(db, newR);
    return res.json({id: result.insertedId});
  })

  app.post("/api/profile", checkJwt, async (req, res) => {
    let {name} = req.body;
    let userId = req.user.sub;
    let db = req.db;

    let newProfile = {
      name,
      userId
    }
    let result = await updateProfile(db, userId, newProfile);
    return res.json({result});
  })


  app.get("/api/profile", checkJwt, async (req, res) => {
    let userId = req.user.sub;
    let db = req.db;
    let profile = await getProfile(db, userId);
    return res.json(profile);
  })
}

exports.configRoutes = configRoutes;
