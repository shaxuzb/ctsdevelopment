import React, { Suspense } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { asset } from '../../../assets/asset';
import Headepages from '../../../components/Headerofpages/Headepages'
import CardItemOurSkill from '../../../components/itemCardOurSkills/CardItemOurSkill';
import { FaPlay } from "react-icons/fa";
import Mapcts from '../../PagesMain/Mapcts/Mapcts'
import Footer from '../../PagesMain/Footer/Footer'
import './aboutus.css'
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
  const purposes_arr = Array.from({ length: 3 }, (v, i) => i);
  const { t } = useTranslation();
  return (
    <Suspense
    fallback="Loading"
    >
        <section className='aboutus'>
            <Navbar />
            <div className="home_page_img_aboutUs">
              <img src='https://s3-alpha-sig.figma.com/img/cc65/e458/0a20362159048ad47920c631d82b7dca?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMGu9QaQQg0NuE5xtNk1JeOBVIl1E5bzJ-1noV63NDjnYsJ4B3scktcIklILnPcy9uGlkJhzFesj3DRTLpChlEXjzo2eeDi6X~2-DW-SST~0T47T7uY3UbCIZH7JDk2~ekhzadr2GrXE8nxHvJNO5qQMz5NdO1n2fbfnlAcFaSqQR0SbWP-tuWB9FOPLb5VbzJD6-8-DdJpcJ~cQDGPpv~1blLcLvWfrXcghiXXhVdQRpUCm5BOWZZ4eHJrjDEcb3o64dCZxd~SGXrjWkK38rXdcfygGoYP-in7W1FjHIrNrwZ2Wdoayn0MAm1qhyqPuC5JssGFXW8zksukSd9BcxQ__' />
              <div className="parag_about_max_width">
                <p>Мы стремимся быть лидерами в отрасли, предлагая <br /> передовые решения и превосходное качество работы.</p>
              </div>
            </div>
            <div className="card_about_parent">
              <div className="card_about_us">
                <Headepages headerClassDiv={'card_about_us_header'} headerH1={'Ценности компании'} parag={'Мы верим, что наши ценности являются основой нашего успеха и помогают нам строить счастье для наших клиентов'} />
                <div className="card_aboutUs">
                  <CardItemOurSkill parentClassCard={'about_card_class'} changeLang={t} h1Header={'Aboutus.cards.cardh'} lengthArr={5} transLangT={'Aboutus.cards.cardp'} />
                </div>
              </div>
            </div>
            <div className="purpose_company">
                <div className="child_purpose_comp">
                  <Headepages headerClassDiv={'purpose_company_about_us_header'} headerH1={'Цель компании'} />
                  <div className="parag_purpose_company">
                      {
                        purposes_arr.map((purpose_arr, index)=>{
                          {
                            return <p key={purpose_arr.id}>{t("Aboutus.purpose_card_parag.parag_card"+index)}</p>
                          }
                        })
                      }
                      <img src={asset.purpos_vektor_bg} alt={asset.purpos_vektor_bg} />
                  </div>
                </div>
            </div>
            <div className='about_video_page'>
              <div className='modal_open'>
                <img src={asset.aboutvideo_image} alt={asset.aboutvideo_image} />
                <button className='play_modal_about_us'><FaPlay /></button>
              </div>
            </div>
            <div className="map_about_m" style={{marginTop: '150px'}}>
              <Mapcts />
            </div>
            <Footer />
        </section>
    </Suspense>
    
  )
}

export default AboutUs