import React from 'react'
import './partners.css'
import { partners } from '../../../assets/asset'
import Headepages from '../../../components/Headerofpages/Headepages'
const Partners = () => {
  return (
    <section id='partners'>
      <div className="maxwidth_partners">
      <Headepages headerClassDiv={'partners_header'}  headerH1={'Наши партнеры'} parag={'Только бренды с выдающейся репутацией находят свое место в наших стратегических альянсах, например:'}/>
        <div className="partners_card">
          {partners.map((partner, index)=>{
            return(
              <div className='card_image' key={index}>
                <img src={partner.diamondHouseimg0} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Partners