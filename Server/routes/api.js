const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')
const companyController = require ('../controllers/CompanyController');

const validators = require('../helpers/validators')


//User related
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/confirm/:token', userController.confirm)

router.get('/users',  userController.getAllUsers)
router.post('/users', validators.validateAdmin, userController.addSpecial)


//Company related

router.get('/companies', companyController.showAll);
router.post('/companies', companyController.addCompany);
router.delete('/company/:id', companyController.deleteCompany);
router.get('/company/:id', companyController.showOne);
// router.post('/company/:id/drivers', companyController.addDriver);

router.post('/test', (req, res)=>{
    res.send(req.body)
})
module.exports = router;