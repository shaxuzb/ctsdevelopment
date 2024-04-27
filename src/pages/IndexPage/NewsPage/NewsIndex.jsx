import { useRef, useState } from "react"
import './newsPageIndex.css'
import Headepages from "../../../components/Headerofpages/Headepages"
import Navbar from '../../../components/Navbar/Navbar';
import { asset } from "../../../assets/asset";
import { BsTelegram } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import NewsCard from "../../../components/NewsCard/NewsCard"
import Footer from "../../PagesMain/Footer/Footer";
import Mapcts from "../../PagesMain/Mapcts/Mapcts";
const News = () => {
  const [countLimit, setCountLimit] = useState(8)
  const loadRef = useRef()
  function increment() {
      setCountLimit(prev=> prev+4)
  }
  return (
    <section> 
      <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} />
      <section id="news_page_main">
          <div className="parent_news_page_bg">
            <div className="maxwidth_news">
                <Headepages headerClassDiv={'news_page_header'}  headerH1={'Новости'}/>
                <div className="parent_news_item_index" ref={loadRef}>
                <NewsCard limit={countLimit} />
                </div>
                <div className="btn_next_eight_page">
                    <button onClick={()=> increment()}>Barcha yangiliklar</button>
                </div>
                <div className="link_social_news">
                  <div className="list_social_link">
                    <a href="t.me/richdev_1"><BsTelegram></BsTelegram></a>
                    <a href="facebook.com/@shax"><FaFacebookF></FaFacebookF></a>
                    <a href="instagram.com/shaxiachilov_1"><FaInstagram></FaInstagram></a>
                  </div>
                  <p>Eng so'nggi voqealardan xabardor bo'ling - ijtimoiy tarmoqlarimizga obuna bo'ling.</p>
                </div>
            </div>
          </div>
      </section>
      <Mapcts />
      <Footer />
    </section>
  )
}

export default News