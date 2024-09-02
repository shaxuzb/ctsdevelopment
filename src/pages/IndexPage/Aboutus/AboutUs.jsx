import React, { Suspense, useRef } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { asset } from '../../../assets/asset';
import Headepages from '../../../components/Headerofpages/Headepages'
import CardItemOurSkill from '../../../components/itemCardOurSkills/CardItemOurSkill';
import { FaPlay } from "react-icons/fa";
import Mapcts from '../../PagesMain/Mapcts/Mapcts'
import Footer from '../../PagesMain/Footer/Footer'
import './aboutus.css'
import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const videoUrlAddress = "https://www.youtube.com/watch?v=28jXrTui0OE"
const AboutUs = () => {
  const purposes_arr = Array.from({ length: 3 }, (v, i) => i);
  const { t } = useTranslation()
  const footerRef = useRef()
  const indexV = videoUrlAddress.lastIndexOf("=")+1;
  const getV = videoUrlAddress.slice(indexV);
  console.log(getV);
  return (
        <motion.section
        initial="hidden"
        animate="visible"
        whileInView={{opacity: 1, transition:{duration: 1}}}
        exit={{opacity: 0, transition: {duration: 1} }}
        variants={{visible: {transition:  { staggerChildren: 1 }}}}
        className='aboutus'>
            <Navbar footerRef={footerRef} />
            <div className="home_page_img_aboutUs">
              <img src={asset.aboutusimg} />
              <div className="parag_about_max_width">
                <p><Trans
                  i18nKey={t("Aboutus.headingaboutus.phead")} 
                  components={{1: <br />}}
                /></p>
              </div>
            </div>
            <div className="card_about_parent">
              <div className="card_about_us">
                <Headepages headerClassDiv={'card_about_us_header'} headerH1={t("Aboutus.headingaboutus.h1headdream")} parag={t("Aboutus.headingaboutus.pheaddream")} />
                <div className="card_aboutUs">
                  <CardItemOurSkill parentClassCard={'about_card_class'} changeLang={t} h1Header={'Aboutus.cards.cardh'} lengthArr={5} transLangT={'Aboutus.cards.cardp'} lastCardChang={'Aboutus.headingaboutus.pheaddream'} imageAboutusLastCard={asset.starLast} />
                </div>
              </div>
            </div>
            <div className="purpose_company">
                <div className="child_purpose_comp">
                  <Headepages headerClassDiv={'purpose_company_about_us_header'} headerH1={t("Aboutus.headingaboutus.dreamsech1")} />
                  <div className="parag_purpose_company">
                      {
                        purposes_arr.map((purpose_arr,index)=>{
                          {
                            return <p key={purpose_arr+"sad"}>{t("Aboutus.purpose_card_parag.parag_card"+index)}</p>
                          }
                        })
                      }
                      <img src={asset.purpos_vektor_bg} alt={asset.purpos_vektor_bg} />
                  </div>
                </div>
            </div>
            <div className='about_video_page'>
              <div className='modal_open_about_us'>
                <img src={`https://img.youtube.com/vi/${getV}/maxresdefault.jpg`} alt={asset.aboutvideo_image} />
                <a href={videoUrlAddress}  className='play_modal_about_us'><FaPlay /></a>
              </div>
            </div>
            <div className="map_about_m" style={{marginTop: '150px'}}>
              <Mapcts />
            </div>
            <Footer footerRef={footerRef} />
        </motion.section>
    
  )
}

export default AboutUs