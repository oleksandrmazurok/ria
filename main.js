
document.querySelector('#menu-toggle').onclick = function(){
    document.querySelector('.menu__icon').classList.toggle('menu__icon--active');
    document.querySelector('#drop-menu').classList.toggle('drop-menu--hide');
    document.querySelector('#drop-menu').classList.toggle('drop-menu--show');
}

document.querySelector('#mobileMenuBurger').onclick = function(){
    document.querySelector('.mobile__menu__icon').classList.toggle('mobile__menu__icon--active');
    document.querySelector('#mobileDropMenu').classList.toggle('drop-menu--hide');
    document.querySelector('#mobileDropMenu').classList.toggle('drop-menu--show');

}

