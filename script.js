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












// Services Section



const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

const services = [
  {
    title: "النقل السريع",
    desc: "نقل سريع وآمن يشمل جميع أنحاء المملكة باستخدام أسطول حديث ومتطور."
  },
  {
    title: "التخزين الذكي",
    desc: "مخازن مجهزة بأعلى معايير الأمان والسلامة، مع تحكم بدرجة الحرارة والرطوبة."
  },
  {
    title: "خدمات التوزيع",
    desc: "نقدم حلول توزيع فعالة، مع تتبع مباشر وإيصال دقيق وفي الوقت المحدد."
  }
];

function openModal(index) {
  modalTitle.innerText = services[index].title;
  modalDesc.innerText = services[index].desc;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}














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











