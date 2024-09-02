import './footer.css'
import { BsTelegram } from "react-icons/bs";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { asset } from '../../../assets/asset';
import { useState } from 'react';
import { telegrambot } from '../../../api/TelegramBotSend/telegrambot';
import { toast } from "react-toastify";
const Footer = ({footerRef}) => {
    const { t } = useTranslation()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inputValues, setInputValues] = useState({
        name: "",
        tel: "",
        comment: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target

        setInputValues(prevValues => (
                {
                    ...prevValues,
                    [name]: value
                }
            ))
    }
        const handleSubmit = (e)=>{
   
     e.preventDefault()
     
     document.querySelectorAll(".formInp label").forEach(labels =>{
        if (inputValues.name == "" && inputValues.tel == "" && inputValues.comment == "" && inputValues.tel.length !== 13) {
        labels.classList.add("valueNot")
        }
        else{
            labels.classList.remove("valueNot")
        }
    })
        if (inputValues.name != "" && inputValues.tel != "" && inputValues.comment != "" &&  inputValues.tel.length == 13){
        telegrambot(inputValues)
        setInputValues({
            name: "",
            tel: "",
            comment: ""
         })
         setPhoneNumber("")
         toast.success(t("Notification.success"),{
            theme: "light"
         })
     }
    }
  return (
    <footer ref={footerRef}>
       <div className="max_width_footer">
            <div className="l_r_footer">
                <div className="left_form_list_nav">
                    <h1>{t("Footer.callforminph")}</h1>
                    <form action="">
                        <div className="inputs_name_tel">
                            <div className="input formInp">
                                <input type="text" name="name"value={inputValues.name} onChange={(e) => handleChange(e)} required/>
                                <label htmlFor="name">{t("Footer.callforminname")}</label>
                            </div>
                            <div className="input formInp">
                                <input type="tel" name="tel"maxLength={13} value={phoneNumber} required onChange={e=>{
                                    if(!e.target.value.startsWith("+998")) { e.target.value = "+998"}
                                    const removedNumber = e.target.value.replace(/[^0-9^+]/g, "").replace(/[^\d+]/g, '').replace(/\s+/g, '').replace(/(\+998)(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
                                    setPhoneNumber(removedNumber)
                                    handleChange(e)
                               }}/>
                                <label htmlFor="tel">{t("Footer.callformintel")}</label>
                            </div>
                        </div>
                        <div className="text_area_label formInp">
                            <textarea name="comment" cols="30" rows="3" value={inputValues.comment} required onChange={(e) => handleChange(e)}></textarea>
                            <label htmlFor="comment">{t("Footer.callformincomment")}</label>
                        </div>
                        <button onClick={(e)=> handleSubmit(e)}>{t("Footer.call")}</button>
                    </form>
                </div>
                <div className="right_inform_social_link">
                    <div className="header_right" style={{zIndex: 1}}>
                        <h1><a href="tel:+998555179999">(+998) 555-17-9999</a></h1>
                        <a href="mailto:info@cts-ud.com">info@cts-ud.com</a><br />
                        <a href="https://maps.app.goo.gl/8XtvqMXXB8ibaU9B6">{t("Footer.addressFooter")}</a>
                    </div>
                    <div className="list_social_link">
                        <a href="https://t.me/CTS_UNITED_DEVELOPMANT"><BsTelegram></BsTelegram></a>
                        <a href="https://www.youtube.com/@Cts-udv"><FaYoutube></FaYoutube></a>
                        <a href="https://www.instagram.com/cts_united_development"><FaInstagram></FaInstagram></a>
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