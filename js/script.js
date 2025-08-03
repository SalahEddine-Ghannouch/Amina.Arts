let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Close menu when clicking on a menu item (for mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
});

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
});

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

// Initialize home slider with pagination
var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  spaceBetween: 10,
  // Simple pagination settings
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  },
  // Debug callbacks
  on: {
    init: function () {
      if (this.pagination.el) {
        console.log('Pagination element found:', this.pagination.el);
      }
    },
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});
