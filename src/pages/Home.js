import React from 'react'
import Header from './../components/header/Header'

function Home() {
  return (
    <>
        <Header/> 
        
        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, HTML5, CSS3, SASS , SCSS , Grid, Flex</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Other Programming Languages</h2>
                            <p>Java , C++</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Languages</h2>
                            <p>English , Italian , Russian , Romania</p>
                        </li>
                    </ul>

            </div>
        </main>
    </> 
  )
}

export default Home