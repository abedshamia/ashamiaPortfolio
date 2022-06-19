import React from 'react'

const Project = ({id, textHover,img, name, technologies, link}) => {
  return (
    <div className="image-card">
    <div className="project-image">
        <img src={img} alt={textHover} />
        <p className="hover-text">{textHover}
        </p>
    </div>
    <div className="project-details">
     <div className="details-row">
         <h5>Name</h5>
            <h5>{name}</h5>
     </div>
     <div className="tech-row">
        <h5>Technologies</h5>
        <h5>
            {technologies.join(' - ')}
        </h5>
    </div>
       <a href={link} className='visit-link' target="_blank" rel="noreferrer"><h5>Visit ➡</h5></a>
    </div>
   
</div>
  )
}

export default Project