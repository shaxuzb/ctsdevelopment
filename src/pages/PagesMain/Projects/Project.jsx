import React, {useState} from 'react'
import './project.css'
import { useTranslation } from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay , A11y, EffectFade} from 'swiper/modules';
import { Link } from 'react-router-dom';
import { asset } from '../../../assets/asset'
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Headepages from '../../../components/Headerofpages/Headepages';
export const fetchDataProj={
  size_build: '66,000',
  apparts: 1048,
  year_build: 2023
}
const Project = () => {
    const { t } = useTranslation()
   
    const pagination = {
      el: ".swiper-pagination" ,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    };
  return (
    <section className='project' name="project">
        <div className="project_header_swipe_project">
            <Headepages headerClassDiv={'project_header'}  headerH1={t("navbar.li1")} parag={t("Project.header_paragraf")}/>
            <div className='swiper_projects_pr_dia'>
            <Swiper
      modules={[Navigation,Pagination, EffectFade, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      effect={'fade'}
      speed={"600"}
      autoplay={{delay: 3000  }}
      pagination= {pagination}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide>
      <div className="swiper_left_right_element">
        <div className="left_choosing_proje">
          <div className="logo_project">
            <img src={asset.diamondPremium} />
          </div>     
          <div className="header_parag_left_proj">
            <h1>{t("Project.swipe_proj_header")}</h1>
            <p>{t("Project.swipe_proj_parag")}</p>
            <div className="about_project_left">
              <div className="size">
                <h1>{fetchDataProj.size_build} м<sup style={{fontSize: '16px'}}>2</sup></h1>
                <p>{t("Project.all_size")}</p>
              </div>
              <div className="appartments_num">
                <h1>{fetchDataProj.apparts}</h1>
                <p>{t("Project.apartment")}</p>
              </div>
              <div className="building_year">
                <h1>{fetchDataProj.year_build}</h1>
                <p>{t("Project.year_of_building")}</p>
              </div>
            </div>
          </div>
          <div className="btn_link_to_project_navigation">
            <Link to='/project-premium'>{t("Project.btn_proj_text")}</Link>
            
          </div>
        </div>
      </div>
      <div className="right_img_project">
        <img src={asset.diamondHouseimg} />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper_left_right_element">
        <div className="left_choosing_proje">
          <div className="logo_project">
            <img src={asset.diamondHouse} />
          </div>     
          <div className="header_parag_left_proj">
            <h1>{t("Project.swipe_proj_header2")}</h1>
            <p>{t("Project.swipe_proj_parag")}</p>
            <div className="about_project_left">
              <div className="size">
                <h1>{fetchDataProj.size_build} м<sup style={{fontSize: '16px'}}>2</sup></h1>
                <p>{t("Project.all_size")}</p>
              </div>
              <div className="appartments_num">
                <h1>{fetchDataProj.apparts}</h1>
                <p>{t("Project.apartment")}</p>
              </div>
              <div className="building_year">
                <h1>{fetchDataProj.year_build}</h1>
                <p>{t("Project.year_of_building")}</p>
              </div>
            </div>
          </div>
          <div className="btn_link_to_project_navigation">
            <Link to='/project-house'>{t("Project.btn_proj_text")}</Link>
          </div>
        </div>
      </div>
      <div className="right_img_project">
        <img src={asset.diamondHouseimg} />
      </div>
      </SwiperSlide>
      <div className="navigation_for_swiper">
            <div className="swiper-button-prev "><CgArrowLeft /></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"><CgArrowRight /></div>
            </div>
    </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Project