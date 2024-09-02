import React from 'react'
import './partners.css'
import { partners } from '../../../assets/asset'
import Headepages from '../../../components/Headerofpages/Headepages'
import { useTranslation } from 'react-i18next'
const Partners = () => {
  const {t} = useTranslation()
  return (
    <section id='partners'>
      <div className="maxwidth_partners">
      <Headepages headerClassDiv={'partners_header'}  headerH1={t("Ourpartners.ourpartH1")} parag={t("Ourpartners.ourpartP")}/>
        <div className="partners_card">
          {partners.map((partner, index)=>{
            return(
              <div className='card_image' key={index+"partner_images"}>
                <img src={partner.partnersImg} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Partners