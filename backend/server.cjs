const express = require('express');
const cors = require('cors')
const app = express();
const authRoute = require('../backend/routes/auth.js')
app.use(cors());

// Middleware
app.use(express.json());

app.use('/api/user', authRoute);

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));