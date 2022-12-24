const basicCode = (req,res)=>{
  let hearderToken = req.headers.token
    res.send({hearderToken})
}
const basicCode1 = (req,res)=>{
    res.send("Buddy Your Middleware is running for 2")
}
const basicCode2 = (req,res)=>{
    res.send("Buddy Your Middleware is running for 3")
}
const basicCode3 = (req,res)=>{
    res.send("Buddy Your Middleware is running for 4")
}
module.exports.basicCode=basicCode
module.exports.basicCode2=basicCode2
module.exports.basicCode3=basicCode3
module.exports.basicCode1=basicCode1