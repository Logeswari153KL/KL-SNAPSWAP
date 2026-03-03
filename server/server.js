const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.error("Database connection error:", err));

// Example Route for Contact Form
app.post('/api/contact', async (req, res) => {
    // Logic to save message to MongoDB
    res.status(200).json({ message: "Form submitted!" });
});

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { folder: 'snapswap_products' },
});

const upload = multer({ storage: storage });

// POST route to upload image
app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ url: req.file.path }); // Returns the live image URL
});

app.delete('/api/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: "Account successfully removed from database." });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete account" });
    }
});

app.listen(5000, () => console.log("Server running on Port 5000"));