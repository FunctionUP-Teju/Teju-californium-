const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const greet = require('../logger/logger')
let mod2 = require('../util/helper')
const api = require('../fucntions')

// router.get('/test-me', function (req, res) {
//     console.log(greet.welcome("Tejas"));
//      console.log(`Today's Date => ${mod2.currDate()}`)
//    console.log(`Current Month => ${mod2.currMonth()}`);
//    console.log(`Batch Info ${mod2.getBatchInfo()}`);
//    console.log(greet.group());
//    console.log(greet.remove());
//    console.log(greet.uniqueArr());
//    console.log(greet.objectCreation());
//     res.send('any dummy text')
// });


// router.get('/test-you', function(req, res){
//     console.log("Test-OK")
//     res.send(api.getApi())
// })
let array = ["Rag de basanti", "The shining", "Lod of the rings", "Batman begins"]
router.get('/Movies/:indexNumber', function(req, res){
    let useMe =req.params.indexNumber
    let p =array.map(x =>x ).at(useMe)

   
   res.send(p ? p : "Try again ,Use valid index")
})


router.get('/films', function (req,resp){
  resp.send({films : filmygyan})

})

let filmygyan =  [ {
 id: 1,
 name: "The Shining"
}, {
 id: 2,
 name: "Incendies"
}, {
 id: 3,
 name: "Rang de Basanti"
}, {
 id: 4,
 name: "Finding Nemo"
}]
router.get('/films/:filmId', function (req,resp){
    let y = filmygyan.map(x => x).find(x => x.id == req.params.filmId)

  resp.send(y ? y : "Movie doesn't Exist with this id,Try another")

})

module.exports = router;