const geojsonfunct = require('geojson-tools')

const getDistance = geojsonfunct.getDistance

// var data = [ {
//     name: "Thrash Metal",
//     id: "09876534567",
//     geo: [ 45.6,
//            23.7],
//         queue: 50},
//         {
//             name: "Nu Metal",
//             id: "09876534567",
//             geo: [ 37.8,
//                    21.9],
//                 queue: 67},
//                 {
//                     name: "Doom Metal",
//                     id: "09876534567",
//                     geo: [ 67.8,
//                            55.8],
//                         queue: 32},
//                         {
//                             name: "Heavy Metal",
//                             id: "09876534567",
//                             geo: [ 29.6,
//                                    44.9],
//                                 queue: 120},
//                     ];

var myLocation = [
    45.7489036, 21.2415013
]

 module.exports = function(data){
    data.forEach(element => {

    var dist = getDistance([myLocation, element.location])*0.4; 
    var queue = element.queue*0.6;
    console.log(dist)
    element.orderingNumber = dist+queue;
    var estimatedTime = dist/0.5+queue*10
});
    data.sort(function(a, b) {return  a.orderingNumber - b.orderingNumber}  //sorting the array; a & b - elements
    )
    return data
}