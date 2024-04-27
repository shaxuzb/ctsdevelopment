import React from 'react'
import { asset } from '../../assets/asset';
import { Trans } from 'react-i18next';
const CardItemOurSkill = ({changeLang,h1Header,indexOfSpanCard,  lengthArr, transLangT,parentClassCard}) => {
    const divArray = Array.from({ length: lengthArr }, (v, i) => i);
  return (
    <div className="cards_items">
        {
            divArray.map((index) =>{
                return(
                    <div key={index} className={parentClassCard} style={indexOfSpanCard?{backgroundImage: `url(${asset.diamondHouseimg})`}:null}>
                           <div className="car_text">
                            <h1>{
                                h1Header ? <Trans  
                                i18nKey={changeLang(h1Header + index)}
                            />:null
                                }</h1>
                                {
                                indexOfSpanCard ?
                                 <span>{indexOfSpanCard}{index+1}</span> 
                                 :null}
                            
                            <p className='card_parag'>
                                <Trans
                                i18nKey={changeLang(transLangT + index)}
                                components={{1: <br/>}}
                                >

                                </Trans>
                            </p>
                           </div>
                    </div>
                )
            })
        }
        <div className={parentClassCard}>
            <div className="car_text">
                <p className='card_parag'>{changeLang("Ourskills.cards.card8")}</p>
                <img className='img_last_card' src={asset.vektorcheck} style={{shapeOutside: `url(${asset.vektorcheck})`}} />
            </div>
        </div>
    </div>
  )
}

export default CardItemOurSkill;    