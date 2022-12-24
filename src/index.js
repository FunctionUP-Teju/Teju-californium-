const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Teju-Function-Up:rrmWo64wP301WL4O@cluster0.zut3sol.mongodb.net/Ref-Pop", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const assignmentMW= function (req, res, next) {
    var currentdate = new Date(); 
    let eachDate = currentdate.getDate()+" "
                  +currentdate.getMonth()+" "
                  +currentdate.getFullYear()+" "
                  +currentdate.getHours()+":"
                  +currentdate.getMinutes()+":"
                  +currentdate.getSeconds()+":"
                  +currentdate.getMilliseconds()

    let ip= req.ip
    let url= req.originalUrl
    console.log(`${eachDate} ip : ${ip}  req.url : ${url}`)
    next()    
}

app.use( assignmentMW )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
