require('dotenv').config();
const PORT = process.env.APP_PORT || 5000;
const express = require('express');
const middlewareLogReq = require("./middleware/logs")

const app = express();

// Routes
const noteRoutes = require("./routes/notes")

// Middleware
app.use(express.json());
app.use(middlewareLogReq);

// ROUTES
app.use("/api/notes", noteRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({
    message: "Internal server error",
    serverMessage: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});