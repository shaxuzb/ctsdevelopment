import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './news.css'
import Headepages from "../../../components/Headerofpages/Headepages"
import NewsCard from "../../../components/NewsCard/NewsCard"
const News = () => {
  return (
    <section id="news_page_main">
        <div className="maxwidth_news">
            <Headepages headerClassDiv={'news_page_header'}  headerH1={'Новости'}/>
            <div className="parent_news_item">
            <NewsCard limit={3} navigate_news_index={'/news'} />
            <div className="page_linkTo_news">
                <div className="header_parag_news">
                    <h1>Новости компании</h1>
                    <p>Главные события компании “CTS UNITED DEVELOPMENT” – читайте и будьте в курсе</p>
                </div>
                <div className="btn_link_to_news">
                    <Link to='/news'>
                        Все новости
                    </Link>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default News