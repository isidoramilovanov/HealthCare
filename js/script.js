/*** VARIABLES ***/

const image = document.getElementById('image');
const left = document.getElementById('left');
const right = document.getElementById('right');

let arr = [
    '../img/slide-1.jpg', 
    '../img/slide-2.jpg', 
    '../img/slide-3.jpg'
];

let index = 0;

/*** FUNCTIONS AND EVENTS***/

right.addEventListener('click', function() {
    index++;
    if (index == arr.length) {
        index = 0;
    }
    image.src = arr[index];
})

left.addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    image.src = arr[index];
})
