import React, { useState } from 'react'
import './mapgeo.css'
import { Link } from 'react-router-dom'
const MapGeoplan = ({imagemapperlinkimg ,pathImgeMapperArr,projectName,projIndexHouse}) => {
  const [left, setLeft] = useState()  
  const [top, setTop] = useState()  
  const [indexBlock, setIndexBlock] = useState()  
  const [noneBlock, setNoneBlock] = useState()  

  const mouseMove_block = ()=>{
    setNoneBlock(true)
  document.addEventListener("mousemove",(e)=>{
    let x = e.offsetX
    let y = e.offsetY
    setLeft(x-48)
    setTop(y-104)
  })}
  const mouseLeave_block = ()=>{
    setNoneBlock(false)
  }
  return (
    <div className='mapGeoplan'>
        <img src={imagemapperlinkimg}/>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 1920 1080' fill='none' xmlns="http://www.w3.org/2000/svg">
            {
              pathImgeMapperArr.map((pathImgeMapperAr, index)=>{
                return(
                  <Link to={`/${projectName}/${projIndexHouse}/blok-id/${pathImgeMapperAr.blockId}`}
                  key={index+"path_image_Mapper"}>
                  <path style={{
                    translate: `${pathImgeMapperAr.trnslate}px`
                  }} onMouseEnter={()=> {
                    mouseMove_block()
                    setIndexBlock(index+1)
                    }} onMouseLeave={()=> {
                      mouseLeave_block()
                      }} xmlns="http://www.w3.org/2000/svg" d={pathImgeMapperAr.d} />
                  </Link>
                )
              })
            }
           
        </svg>
        <div
        className='block_card_geoplan'
        style={{
          left: left,
          top:top,
          zIndex: 12,
          display: noneBlock ? "flex": "none",
        }}>
          <span>
            BLOK {indexBlock}
          </span>
        </div>
    </div>
  )
}

export default React.memo(MapGeoplan)