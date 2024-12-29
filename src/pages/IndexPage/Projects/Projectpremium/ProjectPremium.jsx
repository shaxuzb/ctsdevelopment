import React,{ useRef, useState } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import HomepageProj from '../../../../components/Projects/HomepageProj'
import '../projectschoose.css'
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
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const pathImgeMapper = [
    {
      d: "M430 267.896L432.928 276.59L497.935 504.394L605.694 527L683 373.392L639.662 124.142L633.22 122.983V117.186L601.009 108.491L602.766 102.695L556.5 94L554.157 100.376L521.361 94L517.262 100.376H514.333L509.648 109.651L503.792 108.491L483.88 146.169L470.995 143.85L448.741 194.28L457.525 196.019L430 247.608L438.199 250.506L430 267.896Z",
      blockId: "1"
    },
    {
      d: "M853.5 167L850 177L862.5 425.5L1072.5 467L1097 406L1116 164.5L1113 163.5L1114 142.5L1115 138L1092.5 134L1094 128L908 91.5L905 98L883 93L873.5 118L865.5 116.5L852 150L853.5 167Z",
      blockId: "2"
    },
    {
      d: "M1323 204L1314.5 240.5L1264 500L1493.5 552.5L1583 292.5L1588.5 255.5L1580 253L1584 227L1559 222L1560 215.5L1363 178L1362 185L1338 179.5L1331.5 206L1323 204Z",
      blockId: "3"
    },
    {
      d: "M1211 679L1199 726L1201 727.5L1199 733L1160 962.5L1413 1027.5L1493 832.5L1506.5 801L1509 796L1516 747L1506.5 744L1511.5 708L1483.5 700.5L1484.5 693.5L1453 686L1453.5 684.5L1400.5 672L1402.5 663H1398.5V658.5L1352.5 648L1350.5 658.5H1346.5L1348.5 650.5L1342.5 649L1341 658.5L1292 648L1288.5 650.5L1257.5 644.5L1255.5 650.5L1230.5 644.5L1221 682L1211 679Z",
      blockId: "4"
    },
]
const ProjectPremium = () => {
  const [imageMapGeo, setImageMapGeo] = useState("geoplan")
  const [offsetLeft, setOffsetLeft] = useState(0)
  const {t} = useTranslation()
  const navigate = useNavigate()
  const footerRef = useRef()
  return (
    <motion.section 
    initial="hidden"
    animate="visible"
    whileInView={{opacity: 1, transition:{duration: 1}}}
    exit={{opacity: 0, transition: {duration: 1} }}
    variants={{visible: {transition:  { staggerChildren: 1 }}}}
    className='project_choose_house'>
      <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} footerRef={footerRef} />
      {/* <div className="proj_home_parent">
          <HomepageProj img_Projecrs={asset.diamondPremium} />
        </div> */}
        <div className="containerAboutProj">
          <img className='logo_back_img' src={asset.vektorLogoBackPorject} alt="logo_back" />
          <AboutProj header_text_h1_proj={t('Project.swipe_proj_header')} header_text_parag_proj={t('Project.swipe_proj_parag')} image_proj_about={asset.aboutprojimage} addres_proj={'Projects.deadline_send.address'} deadline_proj={'Projects.deadline_send.date'} inform_about_proj={fetchDataProj[0]} />
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
              imageMapGeo == "geoplan" ? <MapGeoplan imagemapperlinkimg={asset.projectmapimage}  pathImgeMapperArr={pathImgeMapper} projectName={"project-premium"} projIndexHouse="2"/>: <Mapcts /> 
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
        {/* <div className="about_aparments">
            <AboutApartment img_about_apartment={asset.aboutaparthousepremium } headingChangLang={'Projects.apartmenAbout.h11'} parag1ChangLang={'Projects.apartmenAbout.p1'} parag2ChangLang={'Projects.apartmenAbout.p2'} />
        </div>
        <section className='images_life_in'>
          <LifeDiamond headingLifeDiamonf={"Projects.headinglife.h1"} paragLifeDiamond={"Projects.headinglife.p"} />
        </section>
        <section className='swiper_layout_apartments'>
          <LayoutApartment />
        </section> */}
        {/* <section className='apartment_renovation'>
          <Headepages headerClassDiv={'apartment_renovat'}  headerH1={t('Projects.otdelapartment.heading')} />
          <ApartmentRenovation />
          <div className="button_view_another_project_apart" onClick={()=> navigate('/projects')}>
              <a >
                {t('Projects.otdelapartment.viewotheproject')}
              </a>
          </div>
        </section> */}
        <section className='map_projecthouse'>
          <Mapcts />
        </section>
        <Footer footerRef={footerRef} />
    </motion.section>
  )
}

export default ProjectPremium