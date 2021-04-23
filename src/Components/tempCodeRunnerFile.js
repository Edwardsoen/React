

// const fetch =require('node-fetch');
// const url = "http://localhost:8000/search?search=landscape&page=1&tag="
// // fetch(url).then(d => console.log(d))
// console.log("SYNCHRONOUS")



// // let mPromise = new Promise(function(myResolve, myReject){ 
// //     setTimeout(function() { myResolve("I love You !!"); }, 3000);
// // });

// let mPromise2 = new Promise(function(myResolve, myReject){ 
    
//     console.log("Promsie started ")
    

//     myResolve("DONE")
//     return Promise.resolve().then(d => { 
//         var i  = 0; 
//         for(i; i <= 5; i++){
//             console.log(i)
//         }
//     })
    
// });



// console.log("SYNC1")
// // mPromise.then(d => console.log(d))
// mPromise2.then(d => console.log(d))

// console.log("SYNC2")


var url = 'ws://localhost:8000/api/socket';
const WebSocket = require('ws');
var webSocket = new WebSocket(url);

webSocket.onopen = function(event){
    webSocket.send("senttt")
}


webSocket.onmessage = function(event){
    console.log(event.data)
}