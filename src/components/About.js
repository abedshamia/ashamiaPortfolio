import React from 'react'

const About = () => {
  return (
    <section>
    <div className="Aboutme reveal" id="AboutMe">
        <div className="Aboutme-content">
            <div className="Aboutme-content-head">
                <h2>About <span>me</span></h2>
                <p>I design and code beautiful things, and i love what i do</p>     </div>
           
        </div>
        <div className="container-info">
            <div className="information-aboutme">
            <div className="aboutme-img">
                <img src="./assets/images/dark-about.jpg" alt="Personal photo" />
            </div>
            <div className="aboutme-info">
                <div className="aboutme-info1">
                <h6>First Name <span>Abedalrahman</span></h6>
                <h6>Last Name <span>Shamia</span></h6>
                <h6>Birth Date <span>14 August 1996</span></h6>
               
                <h6>Country <span>Palestine</span></h6>
                <h6>Freelance<span>Available</span></h6>
                <h6> Languages <span>Arabic - English </span> </h6>
                <div className="btn">
                    <a href="./assets/01_Abedalrahman_Shamia_Resume.pdf" download>download my resume</a>
                </div>
                </div>
                <div className="aboutme-info2">
                    <h6>Phone<span>+970 597 997 119</span></h6>
                    <h6>Email <span>ab.shamia96@gmail.com</span></h6>
             
                </div> 
                
            </div>
        </div>
        <hr/>
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-boxes">
                <div className="skill-box">
                    <h3>React</h3>
                    <h3>Node.js - Express</h3>
                    <h3>Vue.js</h3>

                </div>
                <div className="skill-box">
                    <h3>TDD - Jest</h3>
                    <h3>PostgreSQL - MySQL</h3>
                    <h3>Git - GitHub</h3>

                </div>
                <div className="skill-box">
                    <h3>TypeScript</h3>
                    <h3>MongoDB</h3>
                    <h3>PHP - Laravel</h3>
                </div>
            </div>
        </div>

        </div>
    </div>
</section>
  )
}

export default About