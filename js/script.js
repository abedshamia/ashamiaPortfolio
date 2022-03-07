const nav = document.querySelector('nav');
const heroSection = document.querySelector('#Home');

//after home scroll give nav background color
window.addEventListener('scroll', () => {
  if (window.scrollY > heroSection.clientHeight) {
    nav.classList.add('nav-bg');
  } else {
    nav.classList.remove('nav-bg');
  }
});


function toggleMenu() {
  let menuList =document.querySelector('#menuList')
  menuList.classList.toggle('toggleList')
}

window.addEventListener('scroll', reveal);

function reveal() {
  const revealSections = document.querySelectorAll('.reveal');
  const sectionsArray = Array.from(revealSections);

  sectionsArray.forEach(section => {
    const revealPoint = 150;
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
  });
}

