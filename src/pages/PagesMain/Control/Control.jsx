import { useTranslation } from 'react-i18next'
import { asset } from '../../../assets/asset'
import '../Aboutus/aboutlink.css'
const Control = () => {
  const { t } = useTranslation()
  return (
    <section id='controls'>
        <div className="control_card">
            <div className="text_control">
                <h1>{t("Controls.contH1")}</h1>
                <p>{t("Controls.contP")}</p>
            </div>
            <img src={asset.checkVektor} />
        </div>
    </section>
  )
}

export default Control