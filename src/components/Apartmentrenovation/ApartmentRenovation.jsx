import React, { useEffect, useState } from "react"
import {Pagination,Navigation,A11y} from "swiper/modules"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import { apartRoomImages} from "../../assets/asset"
import { useTranslation } from "react-i18next"

import './Apartmentrenovation.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ApartmentRenovation = () => {
    const [swipeLength, setSwipeLength] = useState(0)
  return (
    <div className="container_swiper_renovation">
         <Swiper
            modules={[Navigation,Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }}
            pagination={{
                clickable: false,
                type: "bullets",
            }}
            speed={600}
            onSlideChange={(e) => setSwipeLength(e.activeIndex)}
         >
                {
                    apartRoomImages.map((apartRoomImage, index)=>{
                        return(
                            <SwiperSlide key={index+"images_apart_renovat"}>
                                <img src={apartRoomImage.apartImage} alt="images"  />
                            </SwiperSlide>
                        )
                    })
                }
            
                <ButtonsSlide swipeLengthS={swipeLength} />
                <div className="swiper-button-next"><GrFormNext /></div>
                <div className="swiper-button-prev"><GrFormPrevious /></div>
            </Swiper>
    </div>
  )
}

export default ApartmentRenovation



const ButtonsSlide = ({swipeLengthS})=>{
    const swipersBtn = useSwiper()
    const {t} = useTranslation()
    return(
        <div className="container_buttons">
           <button className={swipeLengthS >= 0 && swipeLengthS < 1?"activer":""} onClick={()=> swipersBtn.slideTo(0)}>{t("Projects.otdelapartment.buttonswipe0")}</button>
           <button className={swipeLengthS > 0 && swipeLengthS < 2?"activer":""} onClick={()=> swipersBtn.slideTo(1)}>{t("Projects.otdelapartment.buttonswipe1")}</button>
           <button className={swipeLengthS > 1 && swipeLengthS < 3?"activer":""} onClick={()=> swipersBtn.slideTo(2)}>{t("Projects.otdelapartment.buttonswipe2")}</button>
           <button className={swipeLengthS > 2 && swipeLengthS < 4?"activer":""} onClick={()=> swipersBtn.slideTo(3)}>{t("Projects.otdelapartment.buttonswipe3")}</button>
           <button className={swipeLengthS >= 4?"activer":""} onClick={()=> swipersBtn.slideTo(4)}>{t("Projects.otdelapartment.buttonswipe4")}</button>
        </div>
    )
}