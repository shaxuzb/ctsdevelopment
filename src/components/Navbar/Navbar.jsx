import React, { useState } from 'react';
import { asset } from '../../assets/asset'
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './navbar.css'
const Navbar = ({bg_image_in_Proj, color_nav_list}) => {
  const [ navFix, setNavFix ] = useState(false)
const { t } = useTranslation()
document.addEventListener("scroll",()=>{
 window.scrollY >= 560 ? setNavFix(true) : setNavFix(false)
})
return (
    <nav className={navFix ? "active": null}>
      <div className="navbar">
        <Link to='/'>
          {bg_image_in_Proj ? <img src={bg_image_in_Proj} /> :  navFix ? <img src={asset.navLogoBlack} />:<img src={asset.navLogoWhite} /> }
        </Link>
        <div className="list_nav">
          <ul className={color_nav_list ? color_nav_list : null}>
            <li>
              <Link to='/aboutus'>
                {t("navbar.li0")}
              </Link>
            </li>
            <li>
              <Link to='/'>
                {t("navbar.li1")}
              </Link>
            </li>
            <li>
              <Link>
                {t("navbar.li2")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar