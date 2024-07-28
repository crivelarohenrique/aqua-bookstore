const errorMessages = require('../config/errorMessage');
const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getUsersController = async (req, res) => {
    try {
        const users = await UserService.getUsersService();
        res.json(users)
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
};

const getUserBalanceController = async (req, res) => {
    const userId = req.user._id;
    try {
        const balance = await UserService.getUserBalanceService(userId);
        res.status(200).send({ balance })
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
}

const getUsernameController = async (req, res) => {
    const userId = req.user._id;
    try {
        const username = await UserService.getUsernameService(userId)
        res.status(200).send({ username })
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
}


const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserService.loginUserService(username, password);

        if (user.error === 'Usuário não encontrado' || user.error === 'Senha inválida') {
            return res.status(401).send({ message: 'Usuário ou senha inválidos' });
        }

        const token = jwt.sign(
            { username: user.username, userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: "true", 
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000 
        });

        res.status(200).send({ message: 'Logado com sucesso', token, user });
    } catch (error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
}

const logoutUserController = async (req, res) => {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true, 
            sameSite: 'none',
        });
        res.status(200).send({ message: 'Usuário deslogado com sucesso' });
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
};

const createUserController = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserService.createUserService(username, password);
        res.status(201).send({ message: "Usuário criado com sucesso", user});
    } catch (error) {
        if(error.message === 'Usuário já existe') {
            return res.status(400).send(error.message);
        }
        res.status(500).send({ error: errorMessages.genericError });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await UserService.deleteUserService(username);
        if (!user) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        res.status(200).send({ message: 'Usuário deletado com sucesso.', username });
    } catch (error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
};

const authenticateUserController = async (req, res) => {
    if (req.user) {
        return res.json(true)
    } else {
        return res.json(false)
    }
}

module.exports = {
    getUsersController,
    getUserBalanceController,
    getUsernameController,
    loginUserController,
    logoutUserController,
    createUserController,
    deleteUserController,
    authenticateUserController
}
