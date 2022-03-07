const nav = document.querySelector('nav');
const heroSection = document.querySelector('#Home');

//after home scroll give nav background color
window.addEventListener('scroll', () => {
  console.log('scrolling');
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