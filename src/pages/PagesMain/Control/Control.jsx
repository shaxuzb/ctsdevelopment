import { asset } from '../../../assets/asset'
import '../Aboutus/aboutlink.css'
const Control = () => {
  return (
    <section id='controls'>
        <div className="control_card">
            <div className="text_control">
                <h1>Контроль всех стадий девелопмента</h1>
                <p>С момента разработки концепции, проектирования и строительства, до реализации и управления объектами.</p>
            </div>
            <img src={asset.checkVektor} />
        </div>
    </section>
  )
}

export default Control