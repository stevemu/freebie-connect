function configRoutes(app) {
  app.post("/test", async (req, res) => {
    res.json({});
  });

  app.get("/authorized", function(req, res) {
    console.log(req.user);
    // if (!req.user.admin) return res.sendStatus(401);

    res.send("Secured Resource");
  });
}

exports.configRoutes = configRoutes;
