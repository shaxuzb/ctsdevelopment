import './lifediamond.css'
import { imageslife } from '../../assets/asset'
import { Trans, useTranslation } from 'react-i18next'
const LifeDiamond = ({headingLifeDiamonf,paragLifeDiamond}) => {
  const { t } = useTranslation()
  return (
    <div className="container_image_life aboutProj">
        <div className="text_images_life header_text_parag_proj" >
            <h1><Trans 
                i18nKey={t(headingLifeDiamonf)}
                components={{1: <br/>}}
              /></h1>
            <p>{t(paragLifeDiamond)}</p>
        </div>
        <div className="images_grid_life">
            {
              imageslife.map((imagelife, index)=>{
                  return(
                    <div className='container_img_text' key={index+"life_diamond_page_component"}>
                        <div className="img_text_center">
                          <div className="img_life">
                          <img src={imagelife.aboutusimg} alt="imageslife" />
                          </div>
                          <div className="text_life">
                            <p>{t("Projects.imagesdesclife.p"+index)}</p>
                          </div>
                        </div>
                    </div>
                  )
              })
            }
        </div>
    </div>
  )
}

export default LifeDiamond