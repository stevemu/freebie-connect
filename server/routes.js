

function configRoutes(app) {

  app.post("/test", async (req, res) => {
    res.json({});
  });


}

exports.configRoutes = configRoutes;
