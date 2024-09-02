import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"
import Headepages from "../Headerofpages/Headepages";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../../pages/PagesMain/Footer/Footer";
import Navbar from "../Navbar/Navbar"
import ClipLoader from "react-spinners/ClipLoader";
import { asset } from "../../assets/asset"
import './newsidpage.css'
import { BsTelegram } from "react-icons/bs";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Axios from "../../api/axios/Axios";

const NewsIdPage = () => {
  const [getApiNews, setGetApiNews] = useState([])
  const [getLastNews, setGetLastNews] = useState([])
  console.log(getLastNews);
  
  // const [getDataNews, setGetDataNews] = useState(null)
  // const [getTitleNews, setGetTitleNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {t}=useTranslation()
  const id = useParams()
  async function fetchApi(){
      try{
          setLoading(true)
          await Axios.get(`/admin/news/index`).then(datas =>{
          setGetApiNews(datas.data)
          // const setDate = datas.data.published_at
          // const resDate = setDate.slice(0,10).split("-").join(".")
          // const setTitle = datas.data.title
          // const resTitle = setTitle.split(" ").slice(0,3).join(" ")+"..."
          // setGetTitleNews("resTitle")
          // setGetDataNews(resDate)
          setTimeout(() => {
            setLoading(false)
          }, 500);
        })
      }
 catch(err){
  console.log(err);
 }
}
async function lastNews(){
  try{
      await Axios.get(`/admin/news/index`).then(datas =>{
      setGetLastNews(datas?.data?.data?.data)
    })
  }
catch(err){
console.log(err);
}}
  useEffect(()=>{
    lastNews()
    fetchApi()
  },[])
  return (
    <motion.section
    exit={{opacity: 0, transition: {duration: 1} }}
    whileInView={{opacity: 1, transition:{duration: 1}}}
    variants={{visible: {transition:  { staggerChildren: 1 }}}}
    className="about_news"
        >
      <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} />
      <div className="news_id_page_parent">
      {loading? <div className="loading_spinner"><ClipLoader 
        color={{
        color: "red" 
        }}
        loading={loading}
        cssOverride={{
            display: "block"
        }}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:
        <div className="about_news_id_last_news">
          <div className="about_news_id">
            <div className="header_about_id_news">
              <ul>
                <li><Link to='/'>{t("News.mainnews")}</Link></li>
                <li><Link to='/news'>{t("News.headingH1")}</Link></li>
                {/* <li>{getTitleNews}</li> */}
              </ul>
            </div>
            <div className="title_api_id_news">
              <h1>{getLastNews.map(item => item.id == id.id && item.title)}</h1>
            </div>
            <div className="data_published_at_news">
              {/* <p>{getDataNews}</p> */}
            </div>
            <div className="parag_news_id">
                 <div
										className="selected-news-body"
										dangerouslySetInnerHTML={{ __html: getLastNews.map(item => item.id == id.id && item.body) }}
									></div>
            </div>
          </div>
          <div className="last_news" >
            <div className="lastnews_positionSticky">
              <div className="last_news_card" onClick={()=> navigate("/news")}>
                <h1>{t("News.lastNews")}</h1>
                <div className="last_news_link" >
                  {
                    getLastNews.map(getLastNew =>{
                      // const resLastDate = getLastNew.published_at.slice(0,10).split("-").join(".")
                      return(
                        <div key={getLastNew.id+"news_id_page"}>
                          <p>{getLastNew.title}</p>
                          {/* <span>{resLastDate}</span> */}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="card_news_link_social">
                <h1>{t("News.sociallinkdesc.socialdeskp")}</h1>
                <p>{t("News.sociallinkdesc.socialdeskpspan")}</p>
                <div className="link_social_news">
                    <div className="list_social_link">
                      <a href="https://t.me/richdev_1"><BsTelegram></BsTelegram></a>
                      <a href="https://www.youtube.com/@Cts-udv"><FaYoutube></FaYoutube></a>
                      <a href="https://winstagram.com/shaxiachilov_1"><FaInstagram></FaInstagram></a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
}     </div>

      <div className="news_card_page_index">
        <div className="news_car_view_maxthWidth">
          <Headepages headerClassDiv={'news_page_header'}  headerH1={t("News.seemorenews")}/>
          <div className="news_card_page_index_max_width">
            
            <NewsCard limit={2} navigate_news_index={'/news'} />
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  )
}

export default React.memo(NewsIdPage);