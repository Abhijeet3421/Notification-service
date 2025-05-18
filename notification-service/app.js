require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const notificationRoutes = require('./routes/notificationRoutes');
require('./queues/consumer'); // start consuming

const app = express();
app.use(express.json());

app.use('/notifications', notificationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
