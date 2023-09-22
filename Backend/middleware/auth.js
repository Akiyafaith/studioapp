const jwt = require('jsonwebtoken');
const { secret } = process.env.JWT_SECRET;
// Replace with your actual secret key

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.userId = user.userId; // Add userId to the request object
    next();
  });
}

module.exports = authenticateToken;
