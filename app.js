const burger = document.querySelector('.header .nav-bar .nav-list .burger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header .container');
const header = document.getElementById('header');
console.log("header=====>",header);


//burger animation
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// For scroll color of header
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

// Auto closing of menu
menu_item.forEach((item) => {
    item.addEventListener('click', ()=> {
        burger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});