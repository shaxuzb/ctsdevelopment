import { useNavigate, useParams } from "react-router-dom"
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
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const NewsIdPage = () => {
  const [getApiNews, setGetApiNews] = useState([])
  const [getLastNews, setGetLastNews] = useState([])
  const [getDataNews, setGetDataNews] = useState(null)
  const [getTitleNews, setGetTitleNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const id = useParams()
  async function fetchApi(){
      try{
          setLoading(true)
          await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id.id}`).then(datas =>{
          setGetApiNews(datas.data)
          const setDate = datas.data.published_at
          const resDate = setDate.slice(0,10).split("-").join(".")
          const setTitle = datas.data.title
          const resTitle = setTitle.split(" ").slice(0,3).join(" ")+"..."
          setGetTitleNews(resTitle)
          setGetDataNews(resDate)
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
      await axios.get(`https://api.spaceflightnewsapi.net/v4/articles?limit=3`).then(datas =>{
      setGetLastNews(datas.data.results)
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
    <section className="about_news">
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
                <li>Главная</li>
                <li>Новости</li>
                <li>{getTitleNews}</li>
              </ul>
            </div>
            <div className="title_api_id_news">
              <h1>{getApiNews.title}</h1>
            </div>
            <div className="data_published_at_news">
              <p>{getDataNews}</p>
            </div>
            <div className="parag_news_id">
                <p>{getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary}</p>
                <p>{getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary}</p>
                <p>{getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary}</p>
                <p>{getApiNews.summary+" " +getApiNews.summary}</p>
                <p>{getApiNews.summary+" " +getApiNews.summary+" " +getApiNews.summary}</p>
            </div>
          </div>
          <div className="last_news" >
            <div className="last_news_card" onClick={()=> navigate("/news")}>
              <h1>Последние новости</h1>
              <div className="last_news_link" >
                {
                  getLastNews.map(getLastNew =>{
                    const resLastDate = getLastNew.published_at.slice(0,10).split("-").join(".")
                    return(
                      <div key={getLastNew.id}>
                        <p>{getLastNew.title}</p>
                        <span>{resLastDate}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="card_news_link_social">
              <h1>Будьте в курсе всех новостей!</h1>
              <p>подписывайтесь на наши соцсети.</p>
              <div className="link_social_news">
                  <div className="list_social_link">
                    <a href="t.me/richdev_1"><BsTelegram></BsTelegram></a>
                    <a href="facebook.com/@shax"><FaFacebookF></FaFacebookF></a>
                    <a href="instagram.com/shaxiachilov_1"><FaInstagram></FaInstagram></a>
                  </div>
                </div>
            </div>
          </div>
        </div>
}     </div>

      <div className="news_card_page_index">
        <div className="news_car_view_maxthWidth">
          <Headepages headerClassDiv={'news_page_header'}  headerH1={'Смотрите также'}/>
          <div className="news_card_page_index_max_width">
            
            <NewsCard limit={2} navigate_news_index={'/news'} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default React.memo(NewsIdPage);