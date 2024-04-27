import Navbar from '../../../../components/Navbar/Navbar'
import HomepageProj from '../../../../components/Projects/HomepageProj'
import '../projectschoose.css'
import { asset } from '../../../../assets/asset'
import { fetchDataProj } from '../../../PagesMain/Projects/Project'
import AboutProj from '../../../../components/Projects/AboutProj'
import { useTranslation } from 'react-i18next'
const ProjectHouse = () => {
  const {t} = useTranslation() 
  return (
    <section className='project_choose_house'>
        <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} />
        <div className="proj_home_parent">
          <HomepageProj img_Projecrs={asset.diamondHouse} />
        </div>
        <div className="containerAboutProj">
          <AboutProj header_text_h1_proj={t('Project.swipe_proj_header2')} header_text_parag_proj={t('Project.swipe_proj_parag')} image_proj_about={asset.aboutuslinkimg} addres_proj={'г. Олмалык, ул. Абдулла Каххара 30, проект “Yangi O’zbekiston”'} deadline_proj={"Декабрь 2024-года"} inform_about_proj={fetchDataProj} />
        </div>
    </section>
  )
}

export default ProjectHouse