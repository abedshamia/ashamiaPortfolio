import React, { useEffect, useState } from 'react'

const Header = () => {
    useEffect(() => {
        const nav = document.querySelector('nav');
        const heroSection = document.querySelector('#Home');
        window.addEventListener('scroll', () => {
            if (window.scrollY > heroSection.clientHeight) {
              nav.classList.add('nav-bg');
            } else {
              nav.classList.remove('nav-bg');
            }
          });
    return () => {
    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('#Home');
    window.removeEventListener('scroll', () => {
        if (window.scrollY > heroSection.clientHeight) {
          nav.classList.add('nav-bg');
        } else {
          nav.classList.remove('nav-bg');
        }
      })
}
    }, [])

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }
    const closeMenu = () => {
        setMenu(false);
    }
    console.log(menu);
  return (
    <header>
    <nav>
        <div className="logo">
            {/* <!-- Put the < in text  --> */}
           <a href="#Home"><span>{'<'}</span> /Abedalrahman</a>
        </div>
        
        <div className="right-nav">
        <ul id="menuList">
            <li><a href="#Home">home</a></li>
            <li><a href="#AboutMe">about</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>
    <input type="checkbox"  id="click" />
        <label htmlFor="click" className="menu">
            <i className="fas fa-bars" onClick={toggleMenu} ></i>
        </label>
        {menu ? <ul className="toggleList">
            <li><a onClick={closeMenu} href="#Home">home</a></li>
            <li><a onClick={closeMenu} href="#AboutMe">about</a></li>
            <li><a onClick={closeMenu} href="#Portfolio">Portfolio</a></li>
            <li><a onClick={closeMenu} href="#Contact">Contact</a></li>
        </ul> : null}
    </nav>
</header>
  )
}

export default Header