const errorMessages = require('../config/errorMessage');
const User = require('../models/User')
const bcrypt = require('bcrypt')

const getUsersService = async() => {
    try {
        const users = await User.find()
        return users
    } catch(error) {
        return { error: errorMessages.genericError };       
    }   
};

const getUserBalanceService = async(userId) => {
    try {
        const user = await User.findById(userId);
        return user.balance
    } catch(error) {
        return { error: errorMessages.genericError };   
    }
   
}

const getUsernameService = async(userId) => {
    try {
        const user = await User.findById(userId);
        return user.username
    } catch(error) {
        return { error: errorMessages.genericError };
    }
    
}

const loginUserService = async(username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return { error: 'Usuário não encontrado' };
            }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { error: 'Senha inválida' };
        }
        return user;
    } catch(error) {
        return { error: errorMessages.genericError };
    }
}

const createUserService = async(username, password) => {
    try {
        const existingUser = await User.findOne ({ username })
        if (existingUser) {
            return { error: 'Usuário já existe' }
        }
        const user = new User({ username, password });
        await user.save();
        return user;
    } catch(error) {
        return { error: errorMessages.genericError };
    }

};

const deleteUserService = async(username) => { 
    try {  
        const user = await User.findOneAndDelete({ username });
        if (!user) {
            return { error: 'Usuário não encontrado' };
        }
        return { message: 'Usuário deletado com sucesso' };
    } catch(error) {
        return { error: errorMessages.genericError };
    }
   
}

module.exports = {
    getUsersService,
    getUserBalanceService,
    getUsernameService,
    loginUserService,
    createUserService,
    deleteUserService
}