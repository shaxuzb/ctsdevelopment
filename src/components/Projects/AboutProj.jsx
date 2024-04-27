import { useTranslation } from "react-i18next"

const AboutProj = ({header_text_h1_proj, header_text_parag_proj, image_proj_about,addres_proj, deadline_proj, inform_about_proj}) => {
  const { t } = useTranslation()
  return (
    <div className='aboutProj'>
        <div className="header_text_parag_proj">
          <h1>{header_text_h1_proj}</h1>
          <p>{header_text_parag_proj}</p>
        </div>
        <div className="img_about_proj">
          <img src={image_proj_about} alt={image_proj_about} />
          <div className="about_addr_deadli_proj">
            <div className="addres_proj">
              <span>Адрес:</span>
              <p>{addres_proj}</p>
            </div>
            <div className="deadline_proj">
              <span>Срок сдачи:</span>
              <p>{deadline_proj}</p>
            </div>
          </div>
        </div>
        <div className="inform_about_proj_all">
          <div className="size_proj">
            <h1>{inform_about_proj.size_build} <span>м<sup style={{fontSize: "35px", fontWeight: "700"}}>2</sup></span></h1>
            <span>{t('Project.all_size')}</span>
          </div>
          <div className="appartment_proj">
            <h1>{inform_about_proj.apparts}</h1>
            <span>{t('Project.apartment')}</span>
          </div>
          <div className="year_proj">
            <h1>{inform_about_proj.year_build}</h1>
            <span>{t('Project.year_of_building')}</span>
          </div>
        </div>
    </div>
    
  )
}

export default AboutProj