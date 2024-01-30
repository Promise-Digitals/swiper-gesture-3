// for swiped element
document.addEventListener('swiped', function(e) {
    console.log(e.target); // the element that was swiped
    console.log(e.detail.dir); // swiped direction
});

// for left swipe
document.addEventListener('swiped-left', function(e) {
    console.log(e.target); // the element that was swiped
});

// for right swipe
document.addEventListener('swiped-right', function(e) {
    console.log(e.target); // the element that was swiped
});

// for up swipe
document.addEventListener('swiped-up', function(e) {
    console.log(e.target); // the element that was swiped
});

// for down swipe
document.addEventListener('swiped-down', function(e) {
    console.log(e.target); // the element that was swiped
});

// for direct attachment to an element
document.getElementById('myBox').addEventListener('swiped-down', function(e) {
    console.log(e.target); // the element that was swiped
});