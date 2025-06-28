window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  
  setTimeout(() => {
    preloader.style.transition = 'opacity 0.8s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 800);
  }, 4000); // تعرض شاشة التحميل 4 ثواني مع الأنيميشن
});








window.addEventListener('scroll', function() {
  const aboutSection = document.querySelector('.about');
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // إذا قسم "من نحن" داخل الشاشة بـ 100 بكسل تقريباً
  if (sectionTop < windowHeight - 50) {
    aboutSection.classList.add('show');
  }
});



// Scroll reveal for About section
window.addEventListener('scroll', function () {
  const aboutSection = document.querySelector('.about-section');
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 50) {
    aboutSection.classList.add('show');
  }
});



const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide-card');
const prevBtn = document.querySelector('.slider-button.prev');
const nextBtn = document.querySelector('.slider-button.next');

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 24; // including gap
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);
window.addEventListener('load', updateSlider);




// Fade in effect for the slider

window.addEventListener('scroll', function () {
  const sliderSection = document.querySelector('.services-slider-section');
  const sectionTop = sliderSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 50) {
    sliderSection.classList.add('show');
  }
});



// our customers section 

window.addEventListener('scroll', function() {
  const clientImages = document.querySelectorAll('.clients-logos img');
  clientImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      img.classList.add('show');
    }
  });
});



// our team section

window.addEventListener('scroll', function () {
  const teamSection = document.querySelector('.team-section');
  const teamTop = teamSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (teamTop < windowHeight - 50) {
    teamSection.classList.add('show');
  }
});









// Responsive navigation menu


  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay-hum');
  const closeBtn = document.getElementById('close-btn');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });











