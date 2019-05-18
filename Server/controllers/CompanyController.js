const CompanyModel = require('../models/Company');
const UserModel = require('../models/User');


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
}

}