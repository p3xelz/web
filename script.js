/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

// ===================slideshow======================= //
const slides = document.querySelector('.pqowen_slidesarea_2025abc');
const images = document.querySelectorAll('.pqowen_slidesarea_2025abc img');
const prevBtn = document.querySelector('.pqowen_btns_2025abc.prev');
const nextBtn = document.querySelector('.pqowen_btns_2025abc.next');

let currentIndex = 0;

function showSlide(index) {
  if(index < 0) {
    currentIndex = images.length - 1;
  } else if(index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(${-currentIndex * 300}px)`;
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});