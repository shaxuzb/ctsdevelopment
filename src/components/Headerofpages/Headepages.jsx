import React from 'react'
import './headpages.css'
const Headepages = ({headerClassDiv, headerH1, parag}) => {
  return (
    <div className={headerClassDiv+" header_text_pages"}>
            <div className="text_and_line">
                <h1>{headerH1}</h1>
                <span></span>
            </div>
            <p>{parag}</p>
        </div>
  )
}

export default Headepages