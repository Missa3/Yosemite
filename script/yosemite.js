var pics = [
    'ypics/halfdome.png',
    'ypics/hiking.png',
    'ypics/map.jpg',
    'ypics/yosemitefalls.png',
    'ypics/animals.png',
    'ypics/road.jpg'
]

var image = document.getElementsByClassName('image');
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

for (var i = 0; i < image.length; i++) {
    image[i].style.backgroundImage = "url(" + pics[i] + ")";
}

menu.addEventListener("click", function() {

    if (nav.style.display == "block") {
        nav.style.display = "none";
        menu.classList.remove("fa-times");
        menu.className += " fa-bars";
    } else {

        nav.style.display = "block";
        menu.classList.remove("fa-bars");
        menu.className += " fa-times";

    }
});
