require('dotenv').config();
const secret = process.env.SECRET;

const jwt = require("jsonwebtoken");

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: "2h" });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, name, id }) {
    const payload = { email, name, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: "2h" });
  },
};
