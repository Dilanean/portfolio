import "./style.css"
import gitHubIcon from "./../../helpers/icons/gitHub.svg"

import React from 'react'

function BtnGitHub({link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcon} alt=""/>
        GitHub repo
    </a>
  )
}

export default BtnGitHub