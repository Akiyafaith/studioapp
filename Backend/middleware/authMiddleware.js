const jwt = require('jsonwebtoken');
const { secretKey } = require('./auth');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  // Get the token from the request headers, query, or cookies
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Attach the decoded payload to the request object for later use
    req.userId = decoded.userId;
    next();
  });
}
module.exports = {
    verifyToken,
  };
