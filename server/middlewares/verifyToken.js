const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

async function authenticateToken(req, res, next) {
    try {
        const token = req.cookies.jwt; 
        if (!token) {
            req.user = null;
            return next();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            req.user = null;
        } else {
            req.user = user;
        }
    } catch (error) {
        req.user = null;
        console.error('Error during token authentication:', error); 
    }

    next(); 
}

module.exports = { authenticateToken };