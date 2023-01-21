import "./style.css"
import React from 'react'

import gitHub from "./../../img/icons/gitHub.svg"

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                   
                    <li className="social__item"><a target="_blank" href="https://github.com/Dilanean"><img src={gitHub} alt="gitHub link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>©2023 All rigthts reserved created by Arman Dilanean <a className="gitHub-link" target="_blank" href="https://github.com/Dilanean">My Github</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer