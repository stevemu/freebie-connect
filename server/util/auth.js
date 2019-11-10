var jwt = require("express-jwt");
var jwksRsa = require("jwks-rsa");

// Set up Auth0 configuration
const authConfig = {
  domain: "stevemu.auth0.com",
  audience: "https://freebie-connect-api.stevemu.com"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from stevemu.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

module.exports.checkJwt = checkJwt;