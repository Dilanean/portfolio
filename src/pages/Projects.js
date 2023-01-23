import React from 'react'
import Project from '../components/project/Project'
import {projects} from "./../helpers/projectsList"
import { useState,useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

function Projects() {


    const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <main className="section">
        {
            loading ?
            <div className='preloader'>
                <RingLoader
                color={"#d65236"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </div>
            :
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                
                {projects.map((project,index)=>{
                    return <Project key={index} index={index} title = {project.title} img={project.img}/>     
                })}
                
                

            </ul>
        </div>
    }
    </main>
    )
}

export default Projects