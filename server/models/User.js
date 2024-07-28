const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 500
    }

})

userSchema.pre('save', function(next) {
    this.username = this.username.toLowerCase();
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User;