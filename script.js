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
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');

    let currentIndex = 0;
    const totalSlides = sliderItems.length;

    // Function to move the slider to a specific slide
    const goToSlide = (index) => {
        if (index < 0) {
            currentIndex = totalSlides - 1; // Wrap around to the last slide
        } else if (index >= totalSlides) {
            currentIndex = 0; // Wrap around to the first slide
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100; // Calculate the percentage to translate
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    };

    // Function to show the next slide
    const showNextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    // Function to show the previous slide
    const showPrevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    // Add event listeners to the buttons
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Initial load: ensure the first slide is visible
    goToSlide(0);

    // Optional: Auto-slide (uncomment to enable)
    // let slideInterval = setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // // Pause auto-slide on hover
    // sliderWrapper.addEventListener('mouseenter', () => {
    //     clearInterval(slideInterval);
    // });
    // sliderWrapper.addEventListener('mouseleave', () => {
    //     slideInterval = setInterval(showNextSlide, 3000);
    // });

    // Optional: Recalculate slide position on window resize for better responsiveness
    // Though flexbox handles much of it, this ensures correct positioning if layout shifts
    window.addEventListener('resize', () => {
        goToSlide(currentIndex);
    });
});