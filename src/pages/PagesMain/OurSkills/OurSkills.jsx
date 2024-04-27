import React from 'react'
import './ourskills.css';
import { useTranslation } from 'react-i18next';
import CardItemOurSkill from '../../../components/itemCardOurSkills/CardItemOurSkill';
import Headepages from '../../../components/Headerofpages/Headepages'
const OurSkills = () => {
    const { t } = useTranslation() 
  return (
    <section className='ourskills'>
        <Headepages headerClassDiv={'our_skills_header'}  headerH1={t("Ourskills.ourheaderh")} parag={t("Ourskills.ourheaderp")}/>
        <div className='cards_ourskills'>
            <CardItemOurSkill parentClassCard={'ourskill_card_class'} changeLang={t} indexOfSpanCard={"0"} transLangT={"Ourskills.cards.card"} lengthArr={8}></CardItemOurSkill>
        </div>
    </section>
  )
}

export default OurSkills