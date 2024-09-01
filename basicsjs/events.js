// events in javascript 


// a.addEventListener(parameter'click', parameterfunc, parameter3)

    // document.querySelector('logo').addEventListener('click', function (e){
    //  alert("a")
    // })

    // propagation

    // Bubbling: Events start at the innermost element and bubble up to the outermost element.
    // Capturing: Events start at the outermost element and capture down to the innermost element.

    // event properties
// type , timstamp , defaultprevented , target , toElement , scrElement , click
// currenttarget , clientX , clientY , screenX , screenY , altkey , ctrlkey , keycode 


// let a = function(){
//     document.querySelector('h1').innerHTML = "js"
// }

// let change = setTimeout(a, 2000)

// document.querySelector('#button').addEventListener('click', function(){
//     clearTimeout(change)
// })


// let a = function() {
// document.querySelector('h1').innerHTML = "js";
// };

// let intervalId; // Store the interval ID for pausing

// let startButton = document.querySelector('#buttonstart');
// startButton.addEventListener('click', function() {
// if (!intervalId) { // Start the interval if it's not running
// intervalId = setInterval(a, 2000);
// }
// });

// let pauseButton = document.querySelector('#buttonpause');
// pauseButton.addEventListener('click', function() {
// if (intervalId) { // Pause the interval if it's running
// clearInterval(intervalId);
// intervalId = null;
// }
// });
