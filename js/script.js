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

let menuList =document.querySelector('#menuList');
let menu=document.querySelector('.menu i');


function toggleMenu() {
  menuList.classList.toggle('toggleList');
}

Array.from(menuList.children).map(e=>{
  e.addEventListener('click',()=>{
    e.parentElement.classList.toggle('toggleList');
     menu.setAttribute('class','fas fa-bars');
});
})

menu.addEventListener('click',()=>{
menu.classList.toggle('fa-xmark')
})

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

