const checker = function(req,res,next){
    
    // console.log("first MW")
    let logged = false
    if(logged)console.log("Middleware stop");
    else next()
    
}
// const checker2 = function(req,res,next){
//     console.log("Output came after checker 1")
//     next()
// }
// const checker3 =function(req,res,next){
//     console.log("output came after checker2,we can put miltiple middleware on one route handler")
//     next()
// }
module.exports.checker=checker
// module.exports.checker2=checker2
// module.exports.checker3=checker3