var pics = [
    'ypics/hiking.png',
    'ypics/animals.png',
    'ypics/yosemitefalls.png'
]

var box = document.getElementsByClassName('box');
console.log(box);

for (var i = 0; i < box.length; i++) {
    box[i].style.backgroundImage = "url(" + pics[i] + ")";

};
