const express = require('express')
require('dotenv').config();
const cors = require('cors');

// Create server
const app = express();

app.use(cors())
app.use(express.json());

// Public directory
app.use( express.static('public') )

// Routes
app.use('/api/news', require('./routes/news'))
app.use('/api/archived', require('./routes/archived'))




// Listen to petitions
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en ${process.env.PORT}`)
})