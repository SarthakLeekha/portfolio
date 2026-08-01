// Mobile menu open/close
var menuBtn = document.getElementById('menuBtn');
var nav = document.querySelector('.nav');

menuBtn.onclick = function () {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
};

