import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './home.css'

const Home = () => {
    const { t } = useTranslation()
  return (
    <section className='homepage'>
        <div className="back_image_home">
            <div className="max_width">
                <div className="text_home">
                    <p><Trans 
                            i18nKey={t("home.home_text1")}
                            components={{1: <br/>}}
                        />
                    </p>   
                    <h1><Trans 
                            i18nKey={t("home.home_text2")}
                            components={{1: <br/>}}
                        />
                        </h1> 
                </div>       
            </div>
        </div>
    </section>
  )
}

export default Home