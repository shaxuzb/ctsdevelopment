import './footer.css'
import { BsTelegram } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { asset } from '../../../assets/asset';
const Footer = () => {
    const { t } = useTranslation()
  return (
    <footer>
       <div className="max_width_footer">
            <div className="l_r_footer">
                <div className="left_form_list_nav">
                    <h1>Закажите обратный звонок</h1>
                    <form action="">
                        <div className="inputs_name_tel">
                            <div className="input">
                                <input type="text" name="name" required/>
                                <label htmlFor="name">Ваше имя*</label>
                            </div>
                            <div className="input">
                                <input type="tel" name="tel" required onChange={e=>{
                                    const removeWord = e.target.value.replace(/[^0-9]/g, "").replace(/\./g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "  ")
                                    e.target.value = removeWord
                                   
                                }}/>
                                <label htmlFor="tel">Телефон*</label>
                            </div>
                        </div>
                        <div className="text_area_label">
                            <textarea name="comment" cols="30" rows="3" required></textarea>
                            <label htmlFor="comment">Comment</label>
                        </div>
                        <button>Заказать звонок</button>
                    </form>
                </div>
                <div className="right_inform_social_link">
                    <div className="header_right">
                        <h1>(+998) 555-17-9999</h1>
                        <a href="info@cts-ud.com">info@cts-ud.com</a><br />
                        <map name="mapcts">г. Ташкент, р-н Сергели, ул. Файзли-3</map>
                    </div>
                    <div className="list_social_link">
                        <a href="t.me/richdev_1"><BsTelegram></BsTelegram></a>
                        <a href="facebook.com/@shax"><FaFacebookF></FaFacebookF></a>
                        <a href="instagram.com/shaxiachilov_1"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
            </div>
            <div className="list_nav_footer">
                <ul>
                    <li>
                    <Link to='/aboutus'>
                        {t("navbar.li0")}
                    </Link>
                    </li>
                    <li>
                    <Link to='/projects'>
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
       <img src={asset.buildingpngfooter} className='buildimg_absolute'/>
    </footer>
  )
}

export default Footer