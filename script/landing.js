window.onload = function() {
   document.body.className += " loaded";
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
    }

    function hover(x) {
        var hr = x.getElementsByTagName('hr')[0];
        var words = x.getElementsByClassName('words')[0];
        x.addEventListener("mouseenter", function() {
            words.className += " dark";
            hr.style.width = "30%";
        });
        x.addEventListener("mouseleave", function() {
            words.classList.remove("dark");
            hr.style.width = "50%";
        });
    }

    hover(main);
    menu.addEventListener("click", function() {
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
}

// for (var i = 0; i < nav.children.length; i++) {
//     nav.children[i].addEventListener("mouseenter", function() {
// this.innerHTML="<hr>" + this.textContent + "<hr>";
//     });
//     nav.children[i].addEventListener("mouseleave", function() {
//
//
//     });
// }
