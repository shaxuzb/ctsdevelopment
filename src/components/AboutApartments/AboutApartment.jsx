import { useTranslation, Trans } from 'react-i18next'

import './aboutapartments.css'
const AboutApartment = ({img_about_apartment, headingChangLang,parag1ChangLang,parag2ChangLang}) => {
  const {t}=useTranslation()
  return (
    <div className="main_about_apartment">
        <div className="div_image_about">
            <img src={img_about_apartment} alt="image" />
        </div>
        <div className="about_apar_text">
            <h1>
              <Trans 
                i18nKey={t(headingChangLang)}
                components={{1: <span/>}}
              >
                </Trans>
             </h1>
            <p>{t(parag1ChangLang)}</p>
            <p>{t(parag2ChangLang)}</p>
        </div>
    </div>
  )
}

export default AboutApartment