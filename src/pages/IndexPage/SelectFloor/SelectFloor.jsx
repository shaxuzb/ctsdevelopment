import './selectfloor.css'
import Navbar from '../../../components/Navbar/Navbar'
import LifeDiamond from '../../../components/LifeDiamond/LifeDiamond'
import Footer from '../../PagesMain/Footer/Footer'
import { asset } from '../../../assets/asset';
import { Outlet, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlockFloor from '../../../api/axios/ContextFloor';
import Axios from '../../../api/axios/Axios';
import { useEffect, useRef, useState } from 'react';
const SelectFloor = () => {
  const [getFetchDataCts, setGetFetchDataCts] = useState([])
  const [loading, setLoading] = useState(true)
  const paramsBlock = useParams()
  const footerRef = useRef()
  const apiFetchDatas = async ()=>{
      Axios.get(`/admin/home/object/${paramsBlock.projIndex}`).then(response=>{
        setGetFetchDataCts(response.data.data[paramsBlock.idBlock-1].homes)
        setLoading(false)
        
      }).catch(err=>{
        console.log(err);
      })
  }
  function handleFooterScroll(e) {
    e.preventDefault()
    if (footerRef) {
      const offset = 80; // Change this value to adjust the offset
      const footerPosition = footerRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: footerPosition - offset,
        behavior: 'smooth'
      });
    }
  }
  useEffect(()=>{
    apiFetchDatas()
  },[])
  return (
   <BlockFloor.Provider value={{datasFetch: getFetchDataCts, loading: loading}}>
    <motion.section 
    exit={{opacity: 0, transition: {duration: 1} }}
    whileInView={{opacity: 1, transition:{duration: 1}}}
    variants={{visible: {transition:  { staggerChildren: 1 }}}}
    className='select_floor'>
      <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} footerRef={footerRef} />
      <Outlet context={[footerRef,handleFooterScroll]}  />
      <Footer footerRef={footerRef}  />
    </motion.section>
   </BlockFloor.Provider>
  )
}

export default SelectFloor; 