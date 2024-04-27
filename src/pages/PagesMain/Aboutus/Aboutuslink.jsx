import React from 'react'
import './aboutlink.css'
import { asset } from '../../../assets/asset'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Aboutuslink = () => {
    const { t } = useTranslation()
  return (
    <section className='aboutuslink'>
        <div className='container_img'>
            <img src={asset.aboutuslinkimg} />
            <div className="imglink_back">
                <h1>{t("navbar.li0")}</h1>
                <div className="link_parag_desc">
                    <Link to='aboutus'>{t("Project.btn_proj_text")}</Link>
                    <p>{t("Ourskills.cards.card8")}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutuslink