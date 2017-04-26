var pics = [
    'ypics/hiking.png',
    'ypics/yosemitefalls.png',
    'ypics/animals.png'
]

var box = document.getElementsByClassName('box');
var main = document.getElementById('content');
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

for (var i = 0; i < box.length; i++) {
    box[i].style.backgroundImage = "url(" + pics[i] + ")";
    hover(box[i]);
};

function hover(x) {
    var hr = x.childNodes[1].childNodes[3];
    x.addEventListener("mouseenter", function() {
        this.childNodes[1].className += " dark";
        hr.style.width = "30%";
    });
    x.addEventListener("mouseleave", function() {
        this.childNodes[1].classList.remove("dark");
        hr.style.width = "50%";
    });
}
hover(main);


menu.addEventListener("click", function() {
    // var nav = this.previousElementSibling;
    if (nav.style.display == "block") {
        nav.style.display = "none";
        menu.classList.remove("fa-times");
        menu.className += " fa-bars"
    } else {
        nav.style.display = "block";
        menu.classList.remove("fa-bars");
        menu.className += " fa-times"

    }
});

// for (var i = 0; i < nav.children.length; i++) {
//     nav.children[i].addEventListener("mouseenter", function() {
// this.innerHTML="<hr>" + this.textContent + "<hr>";
//     });
//     nav.children[i].addEventListener("mouseleave", function() {
//
//
//     });
// }
