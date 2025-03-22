const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://admin:123@cluster0.xo2tj.mongodb.net/laptop_web', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});