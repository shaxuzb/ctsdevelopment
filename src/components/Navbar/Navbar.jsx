import React, { useEffect, useRef, useState } from 'react';
import { asset } from '../../assets/asset'
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineMenu , AiOutlineMenuUnfold } from "react-icons/ai";

import './navbar.css'
const Navbar = ({bg_image_in_Proj, color_nav_list,footerRef}) => {
  const [ navFix, setNavFix ] = useState(false)
  const [ selectLang, setSelectLang ] = useState(false)
  const [ openResNav, setOpenResNav ] = useState(false)
  const { i18n } = useTranslation()
  const refNav = useRef()
  const locStor = localStorage.getItem("i18nextLng")
document.addEventListener("scroll",()=>{
 
  window.scrollY >= 50 ? setNavFix(true) : setNavFix(false)

})
const tabletSize = useMediaQuery({
  query: '(min-width: 750px)'
})
  // Scroll to the footer with offset when the component is rendered
console.log(openResNav);

return (
    <nav ref={refNav} className={navFix ? "active": null}>
      <div className={color_nav_list?`navbar ${color_nav_list}`: "navbar"}>
        <Link to='/'>
          {bg_image_in_Proj ? <img src={bg_image_in_Proj} /> :  navFix ? <img src={asset.navLogoBlack} />:<img src={asset.navLogoWhite} /> }
        </Link>
        {!tabletSize?
        <div className='response_nav'>
         <div className="language_button_nav">
        <button className='buttonchangelang' style={{
          border: selectLang?"5px":"10%",
          color: openResNav?"var(--maincolor)": navFix?"var(--maincolor)":color_nav_list?"black":"white"
        }} onClick={()=> setSelectLang(prev=>!prev)}>{locStor == "uz"? "UZ" : "RU"}</button>
        <motion.div 
        animate={selectLang?"open":"closed"}
        variants={{
          open:{
            opacity: 1,
              transition: {duration: .3}
          },
          closed:{
            opacity: 0,
            height: 0,
            transition: {duration: .3}
          }
        }}
        className="language_buttons">
          <div className='buttons_lang'>
          <button className={locStor == "uz"?"disabled": ""} onClick={()=> {
            i18n.changeLanguage("uz")
            setSelectLang(false)
          }}>UZ</button>
          <button className={locStor == "ru"?"disabled": ""} onClick={()=> {
            i18n.changeLanguage("ru")
            setSelectLang(false)
            }}>RU</button>
          </div>
        </motion.div>
        </div>
        <button className='button_nav_res' style={{
           color: openResNav?"var(--maincolor)": navFix?"var(--maincolor)":color_nav_list?"black":"white"
        }} onClick={()=> setOpenResNav(prev=> !prev)}>{!openResNav? <AiOutlineMenu/>: <AiOutlineMenuUnfold/>}</button>
        <motion.div 
        animate={openResNav?"open":"closed"}
        variants={{
          open:{
            x: 0,
              transition: {duration: .3}
          },
          closed:{
            x: 300,
            transition: {duration: .3}
          }
        }}
        className="navbar_link_responsive" 
        style={{
          paddingTop: navFix? "100px": "126px"
        }}
        footerRef={footerRef}
        >
          <NavlinkLang color_nav_list={color_nav_list} footerRef={footerRef} openNavRes={setOpenResNav}/>
        </motion.div>
        </div>
      :
      <div className='list_lang'>
      <NavlinkLang color_nav_list={color_nav_list} footerRef={footerRef}/>
      <div className={color_nav_list ? "language_button_nav color_nav_lang": "language_button_nav"} >
        <p className='buttonchangelang' onClick={()=> setSelectLang(prev=>!prev)}>{locStor == "uz"? "UZ" : "RU"}</p>
        <motion.div 
        animate={selectLang?"open":"closed"}
        variants={{
          open:{
            opacity: 1,
              transition: {duration: .3}
          },
          closed:{
            opacity: 0,
            height: 0,
            transition: {duration: .3}
          }
        }}
        className="language_buttons">
         <div className='buttons_lang'>
         <button className={locStor == "uz"?"disabled": ""} onClick={()=> {
            i18n.changeLanguage("uz")
            setSelectLang(false)
          }}>UZ</button>
          <button className={locStor == "ru"?"disabled": ""} onClick={()=> {
            i18n.changeLanguage("ru")
            setSelectLang(false)
            }}>RU</button>
         </div>
        </motion.div>
        </div>
      </div>
      
      
      }
        
      </div>
    </nav>
  )
}

export default Navbar

function NavlinkLang({color_nav_list,footerRef,openNavRes}){
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
  const { t } = useTranslation();
  return(
    <>
    <div className="list_nav">
          <ul className={color_nav_list ? color_nav_list : null}>
            <li onClick={()=>openNavRes(prev=> !prev)}>
              <Link to='/select-apartment'>
                {t("selectPlan.selectFloor")}
              </Link>
            </li>
            <li onClick={()=>openNavRes(prev=> !prev)}>
              <Link to='/aboutus'>
                {t("navbar.li0")}
              </Link>
            </li>
            <li onClick={()=>openNavRes(prev=> !prev)}>
              <Link to="/projects">
                {t("navbar.li1")}
              </Link>
            </li>
            <li onClick={()=>openNavRes(prev=> !prev)}>
              <Link onClick={(e)=> handleFooterScroll(e)}>
                {t("navbar.li2")}
              </Link>
            </li>
          </ul>
        </div>
       
        </>
  )
}