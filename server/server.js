const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.error("Database connection error:", err));

// Example Route for Contact Form
app.post('/api/contact', async (req, res) => {
    // Logic to save message to MongoDB
    res.status(200).json({ message: "Form submitted!" });
});

app.listen(5000, () => console.log("Server running on Port 5000"));