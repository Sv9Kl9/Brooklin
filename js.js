// BURGER MENU

let screenWidth = window.screen.width;
let menu = document.querySelector('.menu__list');
let burgerIcon = document.querySelector('.header__burger-icon')
let header = document.querySelector('.header')

burgerIcon.addEventListener('click',()=>{
  menu.classList.toggle('menu__list-burger');
  header.classList.toggle('white');
});



// TESTEMONIALS

let testimonials = document.querySelectorAll('.testimonial__wrapper');
let buttons =  document.querySelectorAll('.testimonial-icon');

buttons.forEach((button, i) => {
  button.addEventListener('click', ()=>{
    testimonials.forEach((testemonial)=>{
      testemonial.classList.remove('testemonial-selected')
    })

    buttons.forEach((button)=>{
      button.classList.remove('testemonial-icon-selected')
    })

    testimonials[i].classList.add('testemonial-selected')
    button.classList.add('testemonial-icon-selected')
  })
});

testimonials[0].classList.add('testemonial-selected');
buttons[0].classList.add('testemonial-icon-selected');