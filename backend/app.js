// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const categoriesRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/carts');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/carts', cartRoutes);

// Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:123@cluster0.xo2tj.mongodb.net/laptop_web';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB đã kết nối thành công.'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Export app cho Vercel
module.exports = app;