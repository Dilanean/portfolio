import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Project({title, img, index}) {
  return (
    <Link to={`/project/${index}`}>
    <li className="project">
        <a href="./project-page.html">
            <img src={img} className="project__img" alt=''/>
            <h3 className="project__title">{title}</h3>
        </a>
    </li>
    </Link>
    
  )
}

export default Project