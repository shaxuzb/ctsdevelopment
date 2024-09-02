import React,{ useRef, useState } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import HomepageProj from '../../../../components/Projects/HomepageProj'
import '../projectschoose.css'
import { motion } from 'framer-motion'
import { asset } from '../../../../assets/asset'
import { fetchDataProj } from '../../../PagesMain/Projects/Project'
import AboutProj from '../../../../components/Projects/AboutProj'
import MapGeoplan from '../../../../components/MapGeoplan/MapGeoplan'
import Mapcts from '../../../PagesMain/Mapcts/Mapcts'
import Footer from '../../../PagesMain/Footer/Footer'
import { Link } from 'react-scroll'
import AboutApartment from '../../../../components/AboutApartments/AboutApartment'
import LifeDiamond from '../../../../components/LifeDiamond/LifeDiamond'
import LayoutApartment from '../../../../components/Layoutsapartments/LayoutApartment'
import { Trans, useTranslation } from 'react-i18next'
import ApartmentRenovation from '../../../../components/Apartmentrenovation/ApartmentRenovation'
import Headepages from '../../../../components/Headerofpages/Headepages'
import { useNavigate } from 'react-router-dom'



const pathImgeMapper = [
  {
    d: "M1034.5 234L1018.5 273.5L983 636.5L1248 706L1275 666L1374.5 305L1363 302.5L1368 272.5L1337.5 265.5L1339 259L1089 208L1086.5 215L1056.5 208L1046 236L1034.5 234Z",
    trnslate: 150,
    blockId: "1"
    
  },
  {
    d: "M481 190L493 172.5L491 160.5L514.5 126L524 128L542 103.5L568.5 109L573 102.5L796.5 148.5L794.5 150.5V154.5L820.5 160.5V510L794.5 593L528.5 527.5L478 190",
    trnslate: 150,
    blockId: "2"
  }
]
const ProjectHouse = () => {
  const [imageMapGeo, setImageMapGeo] = useState("geoplan")
  const [offsetLeft, setOffsetLeft] = useState(0)
  const {t} = useTranslation() 
  const navigate = useNavigate()
  const footerRef = useRef()
  return (
    <motion.section 
    whileInView={{opacity: 1, transition:{duration: 1}}}
    exit={{opacity: 0, transition: {duration: 1} }}
    variants={{visible: {transition:  { staggerChildren: 1 }}}}
    className='project_choose_house'>
        <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} footerRef={footerRef} />
        <div className="proj_home_parent">
          <HomepageProj img_Projecrs={asset.diamondHouse} />
        </div>
        <div className="containerAboutProj">
          <img className='logo_back_img' src={asset.vektorLogoBackPorject} alt="logo_back" />
          <AboutProj header_text_h1_proj={t('Project.swipe_proj_header2')} header_text_parag_proj={t('Project.swipe_proj_parag')} image_proj_about={asset.diamondHouseIndexImage} addres_proj={'Projects.deadline_send.address'} deadline_proj={'Projects.deadline_send.date'}  inform_about_proj={fetchDataProj[1]} />
        </div>
        <div className='geoplan_map'>
            <div className="buttons_map_geoplan">
              <div className="button_bg_color_buttons">
                <button name='firs' className='geoplan_btn' onClick={(e)=> {
                  setImageMapGeo("geoplan")
                  setOffsetLeft(e.target)
                }}>{t("Projects.buttonsgenplan.genplan")}</button>
                <button className='map_btn' onClick={(e)=> {
                  setImageMapGeo("map")
                  setOffsetLeft(e.target)
                }}>{t("Projects.buttonsgenplan.mapgenplan")}</button>
                <div className='bg_color_button_geoplan' style={{
                  left: offsetLeft.offsetLeft,
                  width: offsetLeft.offsetWidth
                }}></div>
              </div>
            </div>
            {
              imageMapGeo == "geoplan" ? <MapGeoplan imagemapperlinkimg={asset.projecthousegeoplanimg} pathImgeMapperArr={pathImgeMapper} projectName={"project-house"} projIndexHouse="1" />: <Mapcts /> 
            }
        </div>
        <section className='special_pricePage'>
          <div className="link_special_price">
            <Link to='/'>
            <Trans 
                i18nKey={t("Projects.specialprice")}
                components={{1: <span/>}}
              />
            </Link>
          </div>
        </section>
        <div className="about_aparments">
            <AboutApartment img_about_apartment={asset.aboutaparthouse }  headingChangLang={'Projects.apartmenAbout.h1'} parag1ChangLang={'Projects.apartmenAbout.p1'} parag2ChangLang={'Projects.apartmenAbout.p2'} />
        </div>
        <section className='images_life_in'>
          <LifeDiamond  headingLifeDiamonf={"Projects.headinglife.h1"} paragLifeDiamond={"Projects.headinglife.p"} />
        </section>
        <section className='swiper_layout_apartments'>
          <LayoutApartment />
        </section>
        <section className='apartment_renovation'>
          <Headepages headerClassDiv={'apartment_renovat'}  headerH1={t('Projects.otdelapartment.heading')} />
          <ApartmentRenovation />
          <div className="button_view_another_project_apart" onClick={()=> navigate('/projects')}>
              <a>
                {t('Projects.otdelapartment.viewotheproject')}
              </a>
          </div>
        </section>
        <section className='map_projecthouse'>
          <Mapcts />
        </section>
        <Footer footerRef={footerRef} />
    </motion.section>
  )
}

export default React.memo(ProjectHouse)