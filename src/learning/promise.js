const userLeft = false;
const userWatchingCatMem = false;

//const { resolve } = require("path");

// function watchTutorialCallback(goodCallback, errorCallback){
//     if(userLeft){
//         errorCallback("User left!")
//     }else if(userWatchingCatMem){
//         errorCallback("user is watching cat meme")
//     }else{
//         goodCallback('everything is fine')
//     }
// }

// watchTutorialCallback(
//     (msg)=>{console.log(msg)},
//     (errorMsg)=>{console.log("Error!"+errorMsg)}
// )

watchTutorial = new Promise((resolve, reject) =>{
    if (userLeft){
        reject("User left")
    }else if(userWatchingCatMem){
        reject("User is watching cat meme")
    }
    else{
        resolve("Everything is fine")
    }
})

watchTutorial.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log("Error:" + msg)})
