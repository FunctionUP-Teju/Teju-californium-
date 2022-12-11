const { get } = require("underscore")

function currDate(){
    let a = new Date()
    return a
}
module.exports.currDate = currDate

function currMonth(){
    let a = new Date()
    return a.getMonth()
}
module.exports.currMonth = currMonth

function getBatchInfo(){
   const  tejas = {
        batchName : "Californium",
        week : "W5",
        day : 26,
        topicCovered : "Node-js Modules , Postman , Get-api , Post-api"
    }
 return JSON.stringify(tejas) 

}

module.exports.getBatchInfo = getBatchInfo