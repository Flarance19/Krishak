// Import and use main routes for all features
const mainRoutes = require('./routes/main');
app.use('/api', mainRoutes);
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



// Import LanguageSelection model
const LanguageSelection = require('./models/LanguageSelection');

// Import and use authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Krishak backend is running!');
});

// API to save selected language
app.post('/api/language', async (req, res) => {
  try {
    const { language } = req.body;
    if (!language) {
      return res.status(400).json({ error: 'Language is required' });
    }
    const selection = new LanguageSelection({ language });
    await selection.save();
    res.status(201).json({ message: 'Language saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
