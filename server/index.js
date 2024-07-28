const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const connectDB = require('./config/dbConnect');
const cookieParser = require('cookie-parser');
const path = require('path')
require('dotenv').config()

const PORT = 5000;
const app = express()

connectDB();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())
app.use('/imagens', express.static(path.join(__dirname, 'public', 'assets' )))
app.use('/api', router);

app.get('/',(req,res)=>{
    res.send('Express on vercel')
})
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app;
