import React from 'react'
import "../../Styles/style.css"
import {Link} from "react-router-dom"

const Newscomponent = (props) => {
  return (
    <div className='news'>
        <h2>{props.title}</h2>
        <p>{props.desc} <span><Link target="_blank" to={props.url}>Read Full News</Link></span></p>
    </div>
  )
}

export default Newscomponent