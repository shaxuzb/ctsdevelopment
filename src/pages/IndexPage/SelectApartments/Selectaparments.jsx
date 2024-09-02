import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { asset } from '../../../assets/asset'
import Headepages from '../../../components/Headerofpages/Headepages'
import { motion } from 'framer-motion'
import { BiSortAlt2 } from "react-icons/bi";
import './selectapartment.css'
import FilterShaxmatka from '../../../components/Shaxmatka/ShaxmatkaFilter/FilterShaxmatka'
import { ShaxmatkaCardFlex, ShaxmatkaCardGrid } from '../../../components/Shaxmatka/ShaxmatkaCard/ShaxmatkaCard'
import Axios from '../../../api/axios/Axios'
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { useTranslation } from 'react-i18next'
import useAxios from "../../../hooks/useAxios"
import Footer from '../../PagesMain/Footer/Footer'
const initialButtonRooms = [
  { id: 1, room: '1', checked: false },
  { id: 2, room: '2', checked: false },
  { id: 3, room: '3', checked: false },
  { id: 4, room: '4', checked: false }
]
const Selectaparments = () => {
  const [flexboxShax, setFlexboxShax] = useState("grid")
  const [loadingShaxmatka,setLoadingShaxmatka] = useState(true)
  const [valueFilterShax, setValueFilterShax] = useState(false)
  const [boxOpen, setBoxOpen] = useState(false)

  const axiosPrivate = useAxios()

  const [sendApiApartFilter, setSendApiApartFilter] = useState([])

  const [getProjectId, setGetProjectId] = useState(1)
  const [getKorpusId, setGetKorpusId] = useState(1)
  const [getRoomsId, setGetRoomsId] = useState(initialButtonRooms)
  const [getMinSquare, setGetMinSquare] = useState()
  const [getMaxSquare, setGetMaxSquare] = useState()
  const [getStageId, setGetStageId] = useState(1)
  const {t} = useTranslation()
  const footerRef = useRef()
  const apiFetchGetApartment = async ()=>{
    axiosPrivate.get(`/admin/home/object/${getProjectId}`).then(response=>{
      setSendApiApartFilter(response.data.data)
      setLoadingShaxmatka(false)
    }).catch(err=>{
      console.log(err);
    })
}
useEffect(()=>{
  apiFetchGetApartment()
},[getProjectId,getRoomsId,getStageId])

  return (
    <motion.section className='select_apartments'
    exit={{opacity: 0, transition: {duration: 1} }}
    whileInView={{opacity: 1, transition:{duration: 1}}}
    variants={{visible: {transition:  { staggerChildren: 1 }}}}
    >
        <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} footerRef={footerRef} />
        <div className="max_width_select_apartment_page">
          <Headepages headerClassDiv={'select_apartment_page'}  headerH1={t('')} />
          <div className="filter_shaxmatka_page">
            <FilterShaxmatka 
            projIdShaxmatka={getProjectId}
            getProjIdShaxmatka={setGetProjectId}
            getKorpusIdShaxmatka={setGetKorpusId} 
            korpusIdShaxmatka={getKorpusId}
            getRoomsIdShaxmatka={setGetRoomsId}
            roomsIdShaxmatka={getRoomsId}
            getStageIdshaxmatka={setGetStageId}
            stageIdshaxmatka={getStageId}
            setGetMinSquare={setGetMinSquare}
            setGetMaxSquare={setGetMaxSquare}w
            apiApartFilter={sendApiApartFilter} />
          </div>
        </div>
        <div className="shaxmatka_filter_sort">
          <div className="max_width_shaxmatka_filt_sort">
          <div className="filter_sort_flexbox">
              <div className="filter_sort">
                <h1>{t('Projects.shaxmatka.filter.filt')}</h1>
                <div className="filter_sort_inp" onClick={()=> setBoxOpen(prevs => !prevs)} >
                  <div className="select_par" ><BiSortAlt2 />{valueFilterShax?t('Projects.shaxmatka.filter.bigSize'):t('Projects.shaxmatka.filter.smallSize')}</div>
                  <motion.div 
                  animate={boxOpen?"open":"closed"}
                  variants={{
                    open:{
                        opacity: 1,
                        transition: {duration: .3},
                    },
                    closed:{
                      opacity: 0,
                      height: 0,
                      transition: {duration: .3}
                    }
                  }}
                  className="option_roles" onClick={()=>  {setValueFilterShax(prev => !prev)}}>
                    <p className='option_roles_child'>
                      {!valueFilterShax?t('Projects.shaxmatka.filter.bigSize'):t('Projects.shaxmatka.filter.smallSize')}
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="flex_box_filt">
                <button style={flexboxShax=="grid"?{backgroundColor:"#1E2832BF"}:{backgroundColor: "#fff",color: "#000"}} onClick={()=> setFlexboxShax(prev=>prev = "grid")}><CiGrid41/></button>
                <button style={flexboxShax=="flex"?{backgroundColor:"#1E2832BF"}:{backgroundColor: "#fff",color: "#000"}} onClick={()=> setFlexboxShax(prev=>prev = "flex")}><CiGrid2H/></button>
              </div>
            </div>
            <div className="shaxmatka_datas">
            {flexboxShax == "grid"&&
              <motion.div 
              initial={{
                opacity: 0,
                x: 100
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {duration: .4}
              }}
              className="display_grid_shaxmatka">
              <ShaxmatkaCardGrid 
              projIdShaxmatka={getProjectId}
              apiApartFilter={sendApiApartFilter}
              getKorpusId={getKorpusId}
              roomsIdShaxmatka={getRoomsId}
              getStageId={getStageId}
              getMinSquare={getMinSquare}
              getMaxSquare={getMaxSquare}
              valueFilterShax={valueFilterShax}
              />
            </motion.div>}
            {
              flexboxShax == "flex"&&
            <motion.div
            initial={{
              opacity: 0,
              x: 100
            }}
            
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {duration: .4}
            }}
            className="display_flex_table">
                <div className="head_flex_table">
                  <p className='head_parag sxema'>{t('Projects.shaxmatka.card.sxema')}</p>
                  <p className='head_parag proekt'>{t('Projects.shaxmatka.card.proj')}</p>
                  <p className='head_parag ploshad'>{t('Projects.shaxmatka.card.square')}</p>
                  <p className='head_parag korpus'>{t('Projects.shaxmatka.filter.korpus')}</p>
                  <p className='head_parag rooms'>{t('Projects.shaxmatka.card.roomable')}</p>
                  <p className='head_parag floor'>{t('Projects.shaxmatka.filter.stage')}</p>
                </div>
                <ShaxmatkaCardFlex 
                projIdShaxmatka={getProjectId}
                apiApartFilter={sendApiApartFilter}
                getKorpusId={getKorpusId}
                roomsIdShaxmatka={getRoomsId}
                getStageId={getStageId}
                getMinSquare={getMinSquare}
                getMaxSquare={getMaxSquare}
                valueFilterShax={valueFilterShax}
                />
              </motion.div>
              }
            </div>
            </div>    
        </div>
        <Footer footerRef={footerRef}  />
    </motion.section>
  )
}

export default Selectaparments