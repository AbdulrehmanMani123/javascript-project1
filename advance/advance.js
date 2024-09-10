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
  .then(response => response.json())  // Directly call response.json()
  .then(data => {
    console.log(data); // Access the user data here
  })
  .catch(error => {
    console.error(error); // Log the error message for debugging
  });
  