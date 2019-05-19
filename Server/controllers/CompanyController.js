const CompanyModel = require('../models/Company');
const UserModel = require('../models/User');
const locationSorter = require('../helpers/location')

module.exports = {

   async showAll(req, res, next){
        try {  
            const companies = await CompanyModel.find(req.query);
            res.send(companies);
        }
        catch(err) {
            next(err)
        }
    },

async addCompany(req, res, next) {
    var data = req.body;
    // console.log(data)       
    try {
        // console.log('poc')
        var user = await UserModel.create({name: data.admin.name, email: data.admin.email, password: data.admin.password, confirmed: true, status: data.admin.status})
        console.log('poc')
        const company = await CompanyModel.create({name: data.name, adminId: user._id, adminName: user.name, status: data.status})
        user = await UserModel.findByIdAndUpdate({_id: user._id}, {company : company._id}, {new: true})
        res.status(200).send(company)
    }
    catch(err) {
        console.log(err)
        next(err)
    }
},

async deleteCompany(req, res, next){
    try{
        const company = await CompanyModel.findByIdAndDelete({_id: req.params.id});
        res.send(company);
    }
    catch(err){
        next(err)
    }
},


async showOne(req, res, next){
    try {  
        const company = await CompanyModel.findById({_id:req.params.id});
        res.send(company);
    }
    catch(err) {
        next(err)
    }
},

async addDriver(req, res, next){
    const data = req.body
    try{
        const driver = await UserModel.create({name: data.name, email: data.email, password: data.password, confirmed: true, status:0, company: req.params.id})
        var company = await CompanyModel.findById({_id: req.params.id})
        company.drivers.push(driver._id)
        company.save()
        res.status(200).send(driver)
    }
    catch(err){
        next(err)
    }
},

async showShipments(req, res, next){
    try{
        const shipments = await CompanyModel.findById({_id: req.params.id}, 'shipments')
        res.send(shipments)
    }
    catch(err){
        next(err)
    }
},

async addPartners(req, res, next){
    try{
        const company = await CompanyModel.findById({_id: req.params.id})
        company.partners.push(req.body.partner)
        company.save()
        res.send(company)
    }
    catch(err){
        next(err)
    }
},

async getCompanyNames(req, res, next){
    try {  
        const companies = await CompanyModel.find(req.query, 'name');
        // console.log(companies)
        res.send(companies);
    }
    catch(err) {
        next(err)
    }
},

async getCompanyLocation(req, res, next){
    try {  
        const company = await CompanyModel.findById({_id: req.params.id}, 'location');
        // console.log(companies)
        res.send(company);
    }
    catch(err) {
        next(err)
    }
},

async addShipment(req, res, next){
    try{
        var data = req.body
        // console.log(data)
        data.temp = []
        for(var i = 0, len = data.clients.length; i < len; i++){
            var good = await CompanyModel.findOne({name: data.clients[i]}, 'name location')
            good.id = good._id
            data.temp.push(good)
        }
        data.clients = locationSorter(data.temp)
        console.log(data)
        const company = await CompanyModel.findById({_id: req.params.id})
        company.shipments.push(data)
        company.save()
        res.send(company)
    }
    catch(err){
        console.log(err)
        next(err)
    }
}

}