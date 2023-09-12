let lang =document.querySelector('.nav__button-lang');
let text = document.querySelector('.button-lang-en');

lang.addEventListener('click', function () {
    if(text.innerHTML == 'EN') {
        text.innerHTML = 'RU';
    }else if(text.innerHTML == 'RU') {
        text.innerHTML = 'EN';
    }
});
 
let mobMenu = document.querySelector('.nav__burger-menu');
let nav_text = document.querySelector('.nav__text');

mobMenu.addEventListener('click', function () {
    if(mobMenu.classList.contains('open')) {
        mobMenu.style.backgroundImage = "url('./img/ic_round-menu.svg')";
        mobMenu.classList.remove('open');
        nav_text.style.display = 'none';
    } else {
    mobMenu.style.backgroundImage = "url('./img/Close.svg')";
    mobMenu.classList.add('open');
    nav_text.style.display = 'flex';
    }
});
