import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SwiperSlide, Swiper} from 'swiper/react'
import { Autoplay, Thumbs } from 'swiper/modules';
import { layoutfImg } from '../../assets/asset';

import './Layoutapart.css'
import 'swiper/css';

const LayoutApartment = () => {
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetLeftSB, setOffsetLeftSB] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lengthSwiper, setLengthSwiper] = useState(1);
  const [countFloors, setCountFloors] = useState(0);
  const {t} = useTranslation()
  console.log(lengthSwiper);
  return (
    <section className='swiper_layout_apart'>
      <div className="container_slider">
        <div className="heading_planirovka">
          <h1>{t("Projects.planirovka.heading")}</h1>
          <div className="fraction_swiper">
            <span>{lengthSwiper+1}/4</span>
          </div>
        </div>
        <div className='main_swiper'>
          <Swiper
          modules={[Thumbs,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          simulateTouch={false}
          onSlideChange={(swiper)=> setLengthSwiper(swiper.activeIndex)}
        >
          {
            layoutfImg.filter(index => index.index == countFloors).map((aboutapartment, index)=>{
                return(
                  <SwiperSlide key={index+"layout"}>
                    <div className="image_swiper">
                        <img src={aboutapartment.layoutimgap} alt="images Layout" />
                    </div>
                    <div className='properties'>
                      <div className="heading">
                        <h1>{aboutapartment.allSizeApart}м<sup style={{fontWeight: "700",fontSize: "35px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h1>
                      </div>
                      <div className="propertiesFlexbox">
                        <div>
                          <span>{t("Projects.otdelapartment.buttonswipe6")}</span>
                          <h2>{aboutapartment.xoll}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                        </div>
                        <div>
                          <span>{t("Projects.otdelapartment.buttonswipe3")}</span>
                          <h2>{aboutapartment.kitchen}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                        </div>
                        <div>
                          <span>{t("Projects.otdelapartment.buttonswipe7")}</span>
                          <h2>{aboutapartment.allApart}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                        </div>
                        <div>
                          <span>{t("Projects.otdelapartment.buttonswipe4")}</span>
                          <h2>{aboutapartment.sanauzel}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                        </div>
                        {
                          aboutapartment.balkon &&
                          <div>
                            <span>{t("Projects.otdelapartment.buttonswipe8")}</span>
                            <h2>{aboutapartment.balkon}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                          </div>
                        }
                        {
                          aboutapartment.bed &&
                          <div>
                            <span>{t("Projects.otdelapartment.buttonswipe2")}</span>
                            <h2>{aboutapartment.bed}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                          </div>
                        }
                        {
                          aboutapartment.koridor &&
                          <div>
                            <span>{t("Projects.otdelapartment.buttonswipe1")}</span>
                            <h2>{aboutapartment.koridor}<sup style={{fontWeight: "700",fontSize: "24px",display: "inline-block",transform: "translateY(-10px)"}}>2</sup></h2>
                          </div>
                        }
                      </div>
                    </div>
                  </SwiperSlide>
                )
            })
          }
          </Swiper>
        </div>
        <div className="buttons_click_swipe">
            <div className="floor_and_number_of_rooms">
              <div className="parag_heading_style">
                <p>{t('Projects.planirovka.floor')}</p>
                <div className="buttons_floor_swipe">
                  <div className="child_btns_floor">
                    <button onClick={(e)=> {
                      setOffsetLeft(e.target)
                      setCountFloors(0)
                    }}>1</button>
                    <button onClick={(e)=> {
                      setOffsetLeft(e.target)
                      setCountFloors(1)
                    }}>2-16</button>
                    <div className='bg_color_buttons_swipe' style={{
                      left: offsetLeft.offsetLeft,
                      width: offsetLeft.offsetWidth
                    }}></div>
                  </div>
                </div>
              </div>
              <div className="parag_heading_style buttons_layout">
                <p>{t('Projects.planirovka.numofrooms')}</p>
                <div className="buttons_floor_swipe">
                      <Swiper
                      modules={[Thumbs]}
                      slidesPerView={4}
                      onSwiper={setThumbsSwiper}
                      >
                        <SwiperSlide onClick={(e)=>{
                          setOffsetLeftSB(e.target)
                        }}>1</SwiperSlide>
                        <SwiperSlide onClick={(e)=>{
                          setOffsetLeftSB(e.target)
                        }}>2</SwiperSlide>
                        <SwiperSlide onClick={(e)=>{
                          setOffsetLeftSB(e.target)
                        }}>2A</SwiperSlide>
                        <SwiperSlide onClick={(e)=>{
                          setOffsetLeftSB(e.target)
                        }}>2B</SwiperSlide>
                        <div className='bg_color_buttons_swipe_2' style={{
                        left: offsetLeftSB.offsetLeft,
                        width: offsetLeftSB.offsetWidth
                        }}></div>
                      </Swiper>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(LayoutApartment)