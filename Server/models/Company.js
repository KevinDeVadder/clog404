const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ShipmentSchema = new Schema({
    status: {
        type : Boolean,
        default: false
    },
    driver:{
        type: String 
    },
    clients:[{
        name: String,
        location:[Number
            
    ],
        _id: String 
    }], 
    estimatedTime: {
        type: Number
    },
    realTime: {
        type: Number
    }
})

const CompanySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true 
    },
    adminId: String,
    adminName: String,
    status: Number,
    drivers:[String],
    shipments:[ShipmentSchema],
    partners:[{
        name: String,
        id: String
    }],
    location: [Number]

//     program:{
//         type: String,
//         trim: true
//     },
// queue:[{

// name: {type: String},
// id: {type: String},
// shipment: {type: String}
// }],

});




const Company = mongoose.model('company', CompanySchema);

module.exports = Company;