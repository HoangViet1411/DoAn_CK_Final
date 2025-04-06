// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const categoriesRoutes = require('./routes/categories');
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const cartRoutes = require('./routes/carts');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Thêm middleware phục vụ tệp tĩnh

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoriesRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use('/api/carts', cartRoutes);


// === Database Connection ===
const MONGO_URI = 'mongodb+srv://admin:123@cluster0.xo2tj.mongodb.net/laptop_web'; // Nên dùng biến môi trường
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB đã kết nối thành công.'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});