import React from 'react'
import Project from './Project'

const projects = [
    {
        id: 1,
        img: '/assets/images/project-1.png',
        textHover: 'Mock interviews and Match aspiring developers with interviewers',
        name: 'Nova',
        technologies: [
            'React',
            'MongoDB',
            'Express',
            'TypeScript'

        ],
        link: 'https://nova-practicing.herokuapp.com/'
    },
    {
        id: 2,
        img: '/assets/images/project-2.png',
        textHover: 'Everything your pet needs',
        name: 'Pawsitive',
        technologies: [
            'React',
            'Node.js',
            'Express',
            'PostgreSQL'
        ],
        link: 'https://fresh-pet.herokuapp.com/'

    },
    {
        id: 3,
        img: '/assets/images/project-3.png',
        textHover: 'Disney+ Clone',
        name: 'Disney+',
        technologies: [
            'React',
            'Firebase',
            'Styled Components',
        ],
        link: 'https://disney-plusas.netlify.app/'
    },
    {
        id: 4,
        img: '/assets/images/project-4.png',
        textHover: 'Restaurant Website for a Local Restaurant',
        name: 'Omnifood',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
        ],
        link: 'https://omnires.netlify.app/'
    },
    {
        id: 5,
        img: '/assets/images/project-5.png',
        textHover: 'Reddit Clone',
        name: 'Reddit',
        technologies: [
            'Node.js',
            'Express',
            'PostgreSQL',
            'HTML - CSS - JavaScript'
        ],
        link: 'https://redditcloneas.herokuapp.com/'
    },
    {
        id: 6,
        img: '/assets/images/project-6.png',
        textHover: 'Gym and workout website',
        name: 'Gym Website',
        technologies: [
            'React',
            '@emotion',
        ],
        link: 'https://gymbulldozer.netlify.app/'
    }
]
const Projects = () => {
  return (
    <section className="">
    <div className="portfolio reveal" id="Portfolio">
     <div className="container-info">
         <div className="head-portfolio">
             <h2><span>My</span> Portfolio</h2>
             <p>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.</p>
         </div>
      <div className="img-portfolio">
            {projects.map(project => (
                <Project key={project.id} {...project} />
            )
            )}
      </div>
     </div>
    </div>
 </section>
  )
}

export default Projects