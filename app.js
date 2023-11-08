const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Define the port
const PORT = process.env.PORT || 3000;

// Import database models and initialize them
const db = require("./models");
db.syncDb(false).then(() => {
  console.log('Database Synchronized!');
});

// Configure CORS options
const corsOptions = {
  origin: `http://localhost:${PORT}`
};

// Set up middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require and start all routes
require('./routes')(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

