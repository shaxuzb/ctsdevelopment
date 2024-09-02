import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import {Pagination,Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IoClose } from "react-icons/io5";

import { motion, useCycle } from 'framer-motion';
import './roomslayout.css'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imagesLayout } from '../../assets/asset'
import BlockFloor from '../../api/axios/ContextFloor';
import { useOutletContext, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { toast } from 'react-toastify';
const RoomsLayout = () => {
    const paramsRoom = useParams()
    const contextRoomsCon = useContext(BlockFloor)
    const [roomsDatas, setRoomsDatas] = useState()
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [typeModal, setTypeModal] = useState("");
    const {t} = useTranslation()
    const [footerRef, handleFooterScroll] = useOutletContext()

    const swiperRef = useRef(null);
    const swiperRefModal = useRef(null);

    const slideTo = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(index);
        }
       
    };
    const modalSlideTo = (index)=>{
        if (swiperRefModal.current && swiperRefModal.current.swiper) {
            swiperRefModal.current.swiper.slideTo(index);
          }
    }

    const getRoomsFetch = ()=>{
        contextRoomsCon.datasFetch.filter(stageId => stageId.number == paramsRoom.roomId).map(elem=>{
            setRoomsDatas(elem);
        })
      }
    const paginationRoom = {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
    }
       
      useEffect(()=>{
        getRoomsFetch()
      },[contextRoomsCon.datasFetch])
  return (
    <>
    <section className='room_layout'>
    <SwiperRooms openModalBool={isOpen} setOpenModal={toggleOpen} dataRoomsFetch={roomsDatas} swiperRef={swiperRefModal} slideTo={modalSlideTo} setTypeModal={setTypeModal} typeModal={typeModal} handleFooterScroll={handleFooterScroll} />
    <div className="max_width_room_layout">
        <div className="swiper_rooms_layout">
            <div className="swiper_stiky_position">
            <Swiper
                modules={[Navigation,Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                pagination={paginationRoom}
                ref={swiperRef}
            >
                 {
                        imagesLayout.filter(ed=>ed.square == roomsDatas?.square).map((imageLayout, index)=>{
                            return(
                                <div key={index+"images_layout"}>
                                 <SwiperSlide><img src={imageLayout.layoutGenPlan1} alt="image" /><span className="modal_open_rooms_layout" onClick={()=> {toggleOpen() 
                                    setTypeModal("layout")}}><FaSearchPlus /></span></SwiperSlide>
                                 <SwiperSlide><img src={imageLayout.layoutGenPlan2} alt="image" /><span className="modal_open_rooms_layout" onClick={()=> {toggleOpen() 
                                    setTypeModal("layout")}}><FaSearchPlus /></span></SwiperSlide>
                                 <SwiperSlide><img src={imageLayout.layoutPlanirovka} alt="image" /><span className="modal_open_rooms_layout" onClick={()=> {toggleOpen() 
                                    setTypeModal("layout")}}><FaSearchPlus /></span></SwiperSlide>
                                 <SwiperSlide><img src={imageLayout.roomsIndex.filter(res => res.id == paramsRoom.indexRoom).map(dataImg => dataImg.image)} alt="image" /><span className="modal_open_rooms_layout" onClick={()=> {toggleOpen() 
                                    setTypeModal("layout")}}><FaSearchPlus /></span></SwiperSlide>
                                </div>
                            )
                        })
                    }
               
                <div className="navigation_rooms_swiper">
                    <div className="swiper-button-prev"><FaArrowLeftLong /></div>
                    <div className="swiper-button-next"><FaArrowRightLong /></div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
            </div>
        </div>
        {roomsDatas&&
        <div className="properties_about_room">
            <div className="size_bron_room">
                <div className="size_room">
                    <p>{t("viewPlan.roomIndex",{
                        roomIndex: roomsDatas.rooms
                    })}</p>
                    <h1>{roomsDatas.square} м²</h1>
                </div>
                <div className="bron_room_btn">
                    <button style={{
                        '--no_active': "#1E2832BF",
                        '--yeah_active': "#1E283266",
                    }}
                    onClick={(e)=>handleFooterScroll(e)}
                    >{t("selectPlan.zbron")}</button>
                    <button  style={{
                        '--yeah_active': "#1E2832BF",
                        '--no_active': "#1E283266",
                    }}
                    onClick={(e)=>handleFooterScroll(e)}
                    >{t("selectPlan.konsultatsiya")}</button>
                </div>
            </div>
            <div className="about_charakter_room about_prop">
                <h1>{t("Projects.otdelapartment.headingRoomLayout")}</h1>
                <div className="charakter_title_desc about_prop_desc_title">
                    <div className="char_title about_prop_title tit_desc">
                        <p>{t("Projects.otdelapartment.dateTo")}</p>
                        <p>{t("Projects.shaxmatka.card.proj")}</p>
                        <p>{t("Projects.shaxmatka.filter.korpus")}</p>
                        <p>{t("Projects.shaxmatka.card.roomable")}</p>
                        <p>{t("Projects.shaxmatka.filter.stage")}</p>
                    </div>
                    <div className="char_desc about_prop_desc tit_desc">
                        <p>{roomsDatas.plan.created_at.slice(0,10)}</p>
                        <p>{paramsRoom.projectName == "project-house"?"Diamond House":"Premium House"}</p>
                        <p>{t("Projects.shaxmatka.filter.korpus")}-{paramsRoom.idBlock}</p>
                        <p>{roomsDatas.rooms}-{t("selectPlan.komnatnost2")}</p>
                        <p>{roomsDatas.stage} {t("Projects.shaxmatka.filter.stage")}</p>
                    </div>
                </div>
            </div>
            <div className="size_rooms_different about_prop">
            <h1>{t("Projects.otdelapartment.sizeRoom")}</h1>
                <div className="size_room_desc_title about_prop_desc_title">
                    
                    {imagesLayout.filter(id=> id.square == roomsDatas.square).map((room, index)=> {
                        return(
                            <div className="size_room_title about_prop_title tit_desc" key={index+"data_rooms"}>
                            <p>{t("Projects.otdelapartment.buttonswipe6")}</p>
                            <p>{t("Projects.otdelapartment.buttonswipe3")}</p>
                            <p>{t("Projects.otdelapartment.buttonswipe7")}</p>
                            {room.koridor && <p>{t("Projects.otdelapartment.buttonswipe1")}</p>}
                            {room.bed && <p>{t("Projects.otdelapartment.buttonswipe2")}</p>}
                            {room.balkon && <p>{t("Projects.otdelapartment.buttonswipe8")}</p>}
                            <p>{t("Projects.otdelapartment.buttonswipe4")}</p>
                            </div>
                        )
                    })}
                    {imagesLayout.filter(id=> id.square == roomsDatas.square).map((room, index)=> {
                        return(
                            <div className="size_room_desc about_prop_desc tit_desc" key={index+"room_datas"}>
                            <p>{room.xoll} м²</p>
                            <p>{room.kitchen} м²</p>
                            <p>{room.allApart} м²</p>
                            {room.koridor && <p>{room.koridor} м²</p>}
                            {room.bed && <p>{room.bed} м²</p>}
                            {room.balkon && <p>{room.balkon} м²</p>}
                            <p>{room.sanauzel} м²</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="swiper_btn_plan">
                <button onClick={()=> slideTo(0)}>{t("viewPlan.planirovka")}</button>
                <button onClick={()=> slideTo(2)}>{t("Projects.buttonsgenplan.genplan")}</button>
                <button onClick={()=> slideTo(3)}>{t("viewPlan.stagePlan")}</button>
                <button onClick={()=> {
                    if(imagesLayout.filter(id => id.square == roomsDatas.square).find(id => id.imagesOtdelka)){
                        setTypeModal("visual")
                        toggleOpen()
                        console.log("yes");
                    }
                    else{
                        toast.info(t("Notification.noVisualNot"),{
                            theme: "light"
                         })
                        console.log("no");
            
                    }
                }}>{t("viewPlan.visual")}</button>
            </div>
        </div> }
    </div>
</section>
   </>
  )
}

export default RoomsLayout


function SwiperRooms({setOpenModal,openModalBool,dataRoomsFetch,swiperRef,slideTo, typeModal, setTypeModal,handleFooterScroll}) {
    const {t} = useTranslation()
    const paramsRoom = useParams()
    const modalOp = {
        open:{
            y: 0,
            opacity: 1,
            transition:{duration: .5}
        },
        closed:{
            y: 1200,
            opacity: 0,
            transition:{duration: .5} 
        }
    }
    const visualSwiperRef = useRef(null);

    const visualSlideTo = (index) => {
        if (visualSwiperRef.current && visualSwiperRef.current.swiper) {
            visualSwiperRef.current.swiper.slideTo(index);
        }
       
    };
    
    return(
            <motion.div 
            initial={{
                y: 1200,
            }}
            animate={openModalBool ? "open":"closed"}
            variants={modalOp}
            className="back_close_modal_swipe" onClick={()=> setOpenModal(false)}>
            <motion.div 
            animate={openModalBool ? "open":"closed"}
            variants={{
                open:{
                    height: "90%",
                    transitionDuration: ".2s"
                },
                closed:{
                    height: "100%",
                }
            }}
            className="swiper_modal_to" 
            onClick={()=> setOpenModal(true)}>
                {
                    typeModal == "visual"&&
                    <div className="modal_visual_swiper">
                        <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                simulateTouch={false}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }} 
                                className='swiper_visual_images'
                                ref={visualSwiperRef}
                    >
                        {
                            imagesLayout.filter(id=> id.square == dataRoomsFetch?.square).map(imageLayout=> {
                            return(
                                imageLayout.imagesOtdelka.map((images, index)=>{
                                    return(
                                        <SwiperSlide key={index+"visual_images"}>
                                            <img src={images.image.img}  alt="images"  />
                                        </SwiperSlide>
                                    )
                                })
                            )
                            })
                        }
                                        
                        
                            <div className="buttons_swiper_visual">
                                <div className="swiper-button-next"><GrFormNext /></div>
                                <div className="swiper-button-prev"><GrFormPrevious /></div>
                            </div>
                        </Swiper>
                    </div>
                }
                <div className="max_parent_width_swipe_buttons">
                <div className="max_width_swipe_modal">
                    <div className={typeModal == "visual"? "size_room_modal visual_square_size": "size_room_modal"}>
                        <p>{t("viewPlan.roomIndex",{
                        roomIndex: dataRoomsFetch?.rooms
                    })}</p>
                        <h1>{dataRoomsFetch?.square} м²</h1>
                    </div>
                    {
                         typeModal == "layout"&&
                   
                    <div className="swiper_parent_modal">
                  
                        {
                            imagesLayout.filter(ed=>ed.square == dataRoomsFetch?.square).map(imageLayout=>{
                                return(
                                    <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    simulateTouch={false}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"
                                    }}
                                    ref={swiperRef}
                                >
                                    <SwiperSlide>
                                    <TransformWrapper >
                                        <TransformComponent>
                                            <img src={imageLayout.layoutGenPlan1} alt="test" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <TransformWrapper >
                                        <TransformComponent>
                                            <img src={imageLayout.layoutGenPlan2} alt="test" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <TransformWrapper >
                                        <TransformComponent>
                                            <img src={imageLayout.layoutPlanirovka} alt="test" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <TransformWrapper >
                                        <TransformComponent>
                                            <img src={imageLayout.roomsIndex.filter(res => res.id == paramsRoom.indexRoom).map(dataImg => dataImg.image)} alt="test" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                    </SwiperSlide>
                                    <div className="swiper-button-prev"><FaArrowLeftLong /></div>
                        <div className="swiper-button-next"><FaArrowRightLong /></div>
                    </Swiper>
                                )
                            })
                        }
                  
                    </div>
                     }
                    <div className='close_modal_swipe' onClick={()=> setOpenModal(false)}><IoClose /></div>
                </div>
                <div className={typeModal == "visual"?"buttons_for_calling_swipe visual_buttons":"buttons_for_calling_swipe"}>
                        <button  onClick={(e)=> {
                            setOpenModal(false)
                            handleFooterScroll(e)

                        }}>{t("viewPlan.getPhone")}</button>
                        <div className="button_for_swipe">
                        {
                         typeModal == "layout"?
                        <div className="swiper_plan_button">
                            <button onClick={()=> slideTo(0)}>{t("viewPlan.planirovka")}</button>
                            <button onClick={()=> slideTo(2)}>{t("Projects.buttonsgenplan.genplan")}</button>
                            <button onClick={()=> slideTo(3)}>{t("viewPlan.stagePlan")}</button>
                            <button onClick={()=> {
                                if(imagesLayout.filter(id => id.square == dataRoomsFetch?.square).find(id => id.imagesOtdelka)){
                                    setTypeModal("visual")
                                }
                                else{
                                    toast.info(t("Notification.noVisualNot"),{
                                        theme: "light"
                                     })
                        
                                }
                            }}>{t("viewPlan.visual")}</button>
                        </div>:
                        <div className="swiper_plan_button">
                         <button onClick={() => visualSlideTo(0)}>{t("Projects.otdelapartment.buttonswipe0")}</button>
                         <button onClick={() => visualSlideTo(1)}>{t("Projects.otdelapartment.buttonswipe1")}</button>
                         <button onClick={() => visualSlideTo(2)}>{t("Projects.otdelapartment.buttonswipe2")}</button>
                         <button onClick={() => visualSlideTo(3)}>{t("Projects.otdelapartment.buttonswipe3")}</button>
                         <button onClick={() => visualSlideTo(4)}>{t("Projects.otdelapartment.buttonswipe4")}</button>
                      </div>
}
                        </div>
                </div>
                </div>
            </motion.div>
           
            </motion.div>
    )
}