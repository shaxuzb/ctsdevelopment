import { useRef, useState } from "react"
import './newsPageIndex.css'
import Headepages from "../../../components/Headerofpages/Headepages"
import Navbar from '../../../components/Navbar/Navbar';
import { asset } from "../../../assets/asset";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import NewsCard from "../../../components/NewsCard/NewsCard"
import Footer from "../../PagesMain/Footer/Footer";
import Mapcts from "../../PagesMain/Mapcts/Mapcts";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const News = () => {
  const [countLimit, setCountLimit] = useState(8)
  const loadRef = useRef()
  const footerRef = useRef()
  const {t} = useTranslation()
  function increment() {
      setCountLimit(prev=> prev+4)
  }
  return (
    <motion.section
        initial="hidden"
        animate="visible"
        whileInView={{opacity: 1, transition:{duration: 1}}}
        exit={{opacity: 0, transition: {duration: 1} }}
        
        variants={{visible: {transition:  { staggerChildren: 1 }}}}
        className="main_news_page"
    > 
      <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} footerRef={footerRef} />
      <section id="news_page_main">
          <div className="parent_news_page_bg">
            <div className="maxwidth_news">
                <Headepages headerClassDiv={'news_page_header'}  headerH1={t("News.headingH1")}/>
                <div className="parent_news_item_index" ref={loadRef}>
                <NewsCard limit={countLimit} />
                </div>
                <div className="btn_next_eight_page">
                    <button onClick={()=> increment()}>{t("News.buttonseemore")}</button>
                </div>
                <div className="link_social_news">
                  <div className="list_social_link">
                    <a href="https://t.me/richdev_1"><BsTelegram></BsTelegram></a>
                    <a href="https://www.youtube.com/@Cts-udv"><FaYoutube></FaYoutube></a>
                    <a href="https://instagram.com/shaxiachilov_1"><FaInstagram></FaInstagram></a>
                  </div>
                  <p>{t("News.sociallinkdesc.socialdeskp")} - {t("News.sociallinkdesc.socialdeskpspan")}</p>
                </div>
            </div>
          </div>
      </section>
      <Mapcts />
      <Footer footerRef={footerRef} />
    </motion.section>
  )
}

export default News