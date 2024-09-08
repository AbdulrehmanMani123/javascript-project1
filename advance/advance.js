// promises in javascript

// let a = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         console.log("a")
//     },1000)
//     resolve()
// })
// a.then(function() {
//     console.log('js')
// }) 

fetch("https://api.github.com/users/me")
.then(response => {
    return response.json
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
