const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize'); // Import Sequelize
const passport = require('passport'); // Import Passport.js
const LocalStrategy = require('passport-local').Strategy; // Import Passport Local strategy
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const app = express();
const User = require('./models/User');
require('dotenv').config();


// Middleware
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Replace with your front-end URL(s)
    credentials: true, // You may need to set this if you're using cookies or sessions
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a Sequelize instance
const sequelize = new Sequelize('studio_app', 'studio', 'Bella123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true, // You can enable logging for debugging if needed
});

// Test the database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDatabaseConnection();

// Define your Sequelize models and relationships here

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize and deserialize user for session (if needed)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

// Initialize Passport Middleware
app.use(passport.initialize());
// Routes (create these routes in the next step)
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users'); // Import the user routes
const studiosRoutes = require('./routes/studios');
const bookingsRoutes = require('./routes/bookings')

// API Routes
app.use('/api/auth', authRoutes); // Use '/api/auth' prefix for auth routes
app.use('/api/users', usersRoutes); // Use '/api' prefix for user routes
app.use('/api/studios', studiosRoutes);
app.use('/api/bookings', bookingsRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
