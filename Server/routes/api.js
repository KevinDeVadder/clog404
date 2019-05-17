const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

const validators = require('../helpers/validators')


//User related
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/confirm/:token', userController.confirm)

router.get('/users',  userController.getAllUsers)
router.post('/users', validators.validateAdmin, userController.addSpecial)

router.post('/test', (req, res)=>{
    res.send(req.body)
})
module.exports = router;