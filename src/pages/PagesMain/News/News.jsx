import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './news.css'
import Headepages from "../../../components/Headerofpages/Headepages"
import NewsCard from "../../../components/NewsCard/NewsCard"
import { useTranslation } from "react-i18next"
const News = () => {
    const {t} = useTranslation()
  return (
    <section id="news_page_main">
        <div className="maxwidth_news">
            <Headepages headerClassDiv={'news_page_header'}  headerH1={t("News.headingH1")}/>
            <div className="parent_news_item">
            <NewsCard limit={3} navigate_news_index={'/news'} />
            <div className="page_linkTo_news">
                <div className="header_parag_news">
                    <h1>{t("News.linkbuttonnewsindex.newsindexh1")}</h1>
                    <p>{t("News.linkbuttonnewsindex.newsindexp")}</p>
                </div>
                <div className="btn_link_to_news">
                    <Link to='/news'>
                        {t("News.allNews")}
                    </Link>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default News