const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController');
const hashPassword = require('../middlewares/hashPassword');
const { authenticateToken } = require('../middlewares/verifyToken');
const validateCredentials = require('../middlewares/validateUser');

router.get('/', UserController.getUsersController);
router.get('/balance', authenticateToken, UserController.getUserBalanceController)
router.get('/username', authenticateToken, UserController.getUsernameController)
router.get('/auth', authenticateToken, UserController.authenticateUserController)
router.post('/login', UserController.loginUserController)
router.post('/register', validateCredentials, hashPassword, UserController.createUserController)
router.post('/logout', UserController.logoutUserController)
router.delete('/delete/:username', UserController.deleteUserController)


module.exports = router;