const express = require('express');
const cors = require('cors');
const app = express();
// settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use('/api/perros', require("../routes/perro"));
app.use('/api/avistamientos', require("../routes/reporteAvistamiento"));
app.use('/api/estados', require("../routes/estado"));
app.use('/api/extravios', require("../routes/reporteExtravio"));
app.use('/api/users', require("../routes/users"));
module.exports = app;