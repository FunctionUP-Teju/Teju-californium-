const  mod3 = require('lodash')

function welcome(name){
    return `Welcome to my application. I am ${name} and a part of FunctionUp Californium cohort.`
}

module.exports.welcome = welcome

function group(){
    let arr = ["January" ,"February", "March", "April", "may", "June", "July", "August"," September", "October"," November" ,"December"]
    return mod3.chunk(...arr, 4)
}

module.exports.group = group

function remove(){
    let arr1 = [1,3,5,7,9,11,13,15,17,19]
    return mod3.tail(arr1)
}
module.exports.remove = remove

function uniqueArr(){
    let arr3 = [[1],[1,2],[3,5],[1,23,4,5],[3]]
    return mod3.union(...arr3)
}
module.exports.uniqueArr =uniqueArr

function objectCreation(){
    let arr4 =   [
        ["h","The Shining"],["drama”,”Titanic"],["thriller”,”Shutter Island"],["fantasy”,”Pans Labyrinth"]]
    
    return mod3.fromPairs(...arr4)
}
module.exports.objectCreation =objectCreation