const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To enable cross-origin requests

const app = express();
app.use(express.json());
app.use(cors()); // Enable cross-origin requests

// MongoDB schema
const CheckInSchema = new mongoose.Schema({
    location: String,
    checkInTime: { type: Date, default: Date.now },
});
const CheckInModel = mongoose.model('CheckIn', CheckInSchema);

// MongoDB connection (Replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/attendanceDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// POST route to record a check-in
app.post('/api/checkin', async (req, res) => {
    try {
        const { location } = req.body;
        const checkIn = new CheckInModel({ location });
        await checkIn.save();
        res.status(201).json({ message: 'Check-in recorded', checkIn });
    } catch (error) {
        res.status(500).json({ message: 'Check-in failed', error: error.message });
    }
});

// GET route to fetch all check-in history
app.get('/api/checkins', async (req, res) => {
    try {
        const checkIns = await CheckInModel.find().sort({ checkInTime: -1 }); // Sort by latest check-in
        res.status(200).json(checkIns);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch check-ins', error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
