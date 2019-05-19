const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')
const companyController = require ('../controllers/CompanyController');

const validators = require('../helpers/validators')


//User related
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/confirm/:token', userController.confirm)

router.get('/users', validators.validateAdmin, userController.getAllUsers)
router.post('/users', validators.validateAdmin, userController.addSpecial)


//Company related

router.get('/companies', companyController.showAll);
router.post('/companies', validators.validateAdmin, companyController.addCompany);
router.delete('/company/:id', validators.validateAdmin, companyController.deleteCompany);
router.get('/company/:id', companyController.showOne);
router.post('/company/:id/drivers', companyController.addDriver);
router.get('/companies/name', companyController.getCompanyNames);
router.post('/company/:id/shipments', companyController.addShipment)


router.post('/test', (req, res)=>{
    res.send(req.body)
})
module.exports = router;