import React, { useState } from 'react'
import homeImage from "../PagesMain/Home/homePage.webp"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import useAxios from "../../hooks/useAxios"
import Axios from '../../api/axios/Axios';
import { toast } from 'react-toastify';
const Login = () => {
    const { t } = useTranslation()
    const [passwordType, setPasswordType] = useState(false);
    const [inputValues, setInputValues] = useState({
        login: "",
        password: "",
    });
    const user = JSON.parse(localStorage.getItem("user"))
    
    const handleChange = (e)=>{
        const { name, value } = e.target

        setInputValues(prevValues => (
                {
                    ...prevValues,
                    [name]: value
                }
            ))
    }
        const handleSubmit = async(e)=>{
   
     e.preventDefault()
     
     document.querySelectorAll(".formInp label").forEach(labels =>{
        if (inputValues.login == "" && inputValues.password == "") {
        labels.classList.add("valueNot")
        }
        else{
            labels.classList.remove("valueNot")
        }
    })
    try{
        const response = await Axios.post("/login", inputValues)
        if(response && response.data){
            localStorage.setItem("user", JSON.stringify(response.data))
            toast.success("Sizga token berildi",{
                theme: "light",
                type: "success"
             })
        }
    }
    catch (err){
            toast.success(err.message,{
                theme: "light",
                type: "error"
             })
                
    }
    //     if (inputValues.name != "" && inputValues.tel != ""){

    //     // setInputValues({
    //     //     login: "",
    //     //     password: "",
    //     //  })
    //     //  toast.success(t("Notification.success"),{
    //     //     theme: "light"
    //     //  })
    //  }
    }
  return (
    <div className='containerLogin'>
                <footer style={{
                    width: "450px",
                    padding: "20px",
                    borderRadius: "10px"
                }}>
                <div className="left_form_list_nav">
                    <h1 style={{
                        textAlign: "center"
                    }}>
                        {user && user.user ? "Token" :  "Kirish"}
                    </h1>
                    {
                        user && user.user ? 
                            (
                                <div style={{color: "#fff", fontSize: "30px", textAlign: "center", padding: "40px 20px" }}>
                                Sizga token berilgan
                            </div>
                            )
                        :
                         (<form action="" style={{
                            display: "flex",
                            flexDirection:"column"
                        }}>
                            <div>
                            <div className="inputs_name_tel">
                                <div className="input formInp">
                                    <input type="text" name="login" value={inputValues.login} onChange={(e) => handleChange(e)} required/>
                                    <label htmlFor="name">{t("Login")}</label>
                                </div>
                            </div>
                            <div className="inputs_name_tel">
                                <div className="input formInp">
                                    <input type={!passwordType? "password" : "text"} name="password"maxLength={13} value={inputValues.password} required onChange={e=>{
                                        handleChange(e)
                                   }}/>
                                    <label htmlFor="tel">{t("Password")}</label>
                                    <div
                                    onClick={()=>setPasswordType(prev => !prev)}
                                    style={{
                                        zIndex: "212",
                                        color: "#fff", 
                                        position: "absolute",
                                        right: 3,
                                        cursor: "pointer"
                                        }}>
                                        {!passwordType ?<FaEye />: <FaEyeSlash />}
                                    </div>
                                </div>
                            </div>
                            </div>
                            <button style={{borderRadius: "5px"}} onClick={(e)=> handleSubmit(e)}>{t("Footer.call")}</button>
                        </form>)
                    }
                </div>
                </footer>
    </div>
  )
}


export default Login