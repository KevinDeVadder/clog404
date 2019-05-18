const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

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
    
//     partners:{
//         type: String,
//         trim: true
//     },

//     program:{
//         type: String,
//         trim: true
//     },

//     shipments:[{

//         status: {

//             type : Boolean,
//             default: false
//         },

//         driver:{
//             id: String,
//             name: String },


//     clients:[{
//         name: String,
//         geolocation: 
//         {lat: String,
//         long: String
//         },
//         id: String }], 

//     estimatedTime: {
//         type: Number
// },

// // location: {


// // }

// realTime: {
//     type: Number
// }

// }],

// queue:[{

// name: {type: String},
// id: {type: String},
// shipment: {type: String}
// }],

});




const Company = mongoose.model('company', CompanySchema);

module.exports = Company;