import { asset } from '../../assets/asset';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import BlockFloor from '../../api/axios/ContextFloor';
import Backtopage from '../BackToPage/Backtopage';
import LifeDiamond from '../LifeDiamond/LifeDiamond';
import Mapcts from '../../pages/PagesMain/Mapcts/Mapcts';
import Footer from '../../pages/PagesMain/Footer/Footer';
import { useTranslation } from 'react-i18next';
const Floor = () => {
  const [floorsApartments, setFloorsApartments] = useState(1)
  const [floorDatas, setFloorDatas] = useState([])
  const paramSelectFloor = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const context = useContext(BlockFloor)
  const [footerRef, handleFooterScroll] = useOutletContext()
  let stageSquareTrim = []
  let roomBronEval = []
  const getFloorFetch = ()=>{
    context.datasFetch.filter(stageId => stageId.stage == floorsApartments).map(elem=>{
        stageSquareTrim.push(elem)
        setFloorDatas(stageSquareTrim);
    })
  }
  const floorsSelect =[
    { floor: 1, d_path: "M262.5 762.5L1181 790.5L1170 669L266 691.5L262.5 762.5Z" },
    { floor: 2, d_path: "M250 678L1184 648.383L1180.5 551L254.004 614.751L250 678Z" },
    { floor: 3, d_path: "M258.5 547.5L253.5 614L1179.5 550.5L1172 442L258.5 547.5Z" },
    { floor: 4, d_path: "M261.5 481.5L257.5 547.5L1171.5 442L1165.5 345.5L261.5 481.5Z" },
    { floor: 5, d_path: "M266 417.5L261.5 480.5L1166 346L1157.5 241.5L266 417.5Z" },
    { floor: 6, d_path: "M271 354L265.5 417L1157 242L1147 140L271 354Z" },
    { floor: 7, d_path: "M273.5 306.5L269 352.5L1146 140.5L1137 42L273.5 306.5Z" },
  ]
  useEffect(()=>{
    getFloorFetch()
    
  },[floorsApartments,context.datasFetch])
  return (
          <div className='res_toback_select_floors'>
            <Backtopage titleBack={t("selectPlan.backToPageKorpus")} />
            <div className="select_floors">
            <div className='max_width_select_floors'>
              <div className="left_page_select_floor">
                <img src={asset.selectfloorimage} alt="select_image_floor" />
                <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 1409 997' fill='none' xmlns="http://www.w3.org/2000/svg">
                  {
                    floorsSelect.map((floorSelect, index)=>{
                        return <Link key={index+"floor_number"} 
                        onMouseEnter={()=> {
                          setFloorsApartments(floorSelect.floor)
                          getFloorFetch()
                        }} 
                        to={`/${paramSelectFloor.projectName}/${paramSelectFloor.projIndex}/blok-id/${paramSelectFloor.idBlock}/floor/${floorSelect.floor}`}
                        ><path xmlns="http://www.w3.org/2000/svg" d={floorSelect.d_path} /></Link>
                    })
                  }
                </svg>
              </div>
              <div className="right_page_select_floor">
                  <div className='card_right_select_floor'>
                    <div className="heading">
                      <h1>{floorsApartments} {t("Projects.shaxmatka.filter.stage")}</h1>
                      <span>{
                        floorDatas.filter(id => id.status == '1').forEach(roomBron=>{
                          roomBronEval.push(roomBron.status)
                        })
                      
                      }{t("selectPlan.freeRooms",{
                        free_rooms: roomBronEval.length,
                        props_sentence: roomBronEval.length == 1? "а":roomBronEval.length > 1 && roomBronEval.length < 5 ? "ы": ""
                      })}</span>
                    </div>
                    <div className="rooms_floor">
                        <p>1-{t("selectPlan.komnatnost")} <span>----</span>
                        <span 
                        onClick={()=> navigate(`/${paramSelectFloor.projectName}/${paramSelectFloor.projIndex}/blok-id/${paramSelectFloor.idBlock}/floor/${floorsApartments}`)}
                        className={floorDatas[0]&& floorDatas[0].status == "3" && floorDatas[7].status == "3"?"btn_room_size disabled_room_size":"btn_room_size"}>
                          {floorDatas[0]&&floorDatas[0].square} м²</span>
                        </p>
                        <p>2-{t("selectPlan.komnatnost")} <span>----</span> 
                        <span 
                        onClick={()=> navigate(`/${paramSelectFloor.projectName}/${paramSelectFloor.projIndex}/blok-id/${paramSelectFloor.idBlock}/floor/${floorsApartments}`)}
                        className={floorDatas[1]&&floorDatas[1].status == "3" && floorDatas[6].status == "3" ?"btn_room_size disabled_room_size":"btn_room_size"}>
                          {floorDatas[1]&&floorDatas[1].square} м²</span>
                          <span
                          onClick={()=> navigate(`/${paramSelectFloor.projectName}/${paramSelectFloor.projIndex}/blok-id/${paramSelectFloor.idBlock}/floor/${floorsApartments}`)} 
                        className={floorDatas[2]&&floorDatas[2].status == "3" && floorDatas[5].status == "3" ?"btn_room_size disabled_room_size":"btn_room_size"}>
                          {floorDatas[2]&&floorDatas[2].square} м²</span>
                          <span 
                          onClick={()=> navigate(`/${paramSelectFloor.projectName}/${paramSelectFloor.projIndex}/blok-id/${paramSelectFloor.idBlock}/floor/${floorsApartments}`)}
                        className={floorDatas[3]&&floorDatas[3].status == "3" && floorDatas[4].status == "3" ?"btn_room_size disabled_room_size":"btn_room_size"}>
                          {floorDatas[3]&&floorDatas[3].square} м²</span>
                        </p>
                    </div>
                    <button onClick={()=> navigate(`/${paramSelectFloor.projectName}/${paramSelectFloor.projIndex}/blok-id/${paramSelectFloor.idBlock}/floor/${floorsApartments}`)} className='select_floor_button'>{t("selectPlan.selectFloor")}</button>
                    <div className="buttons_get_room">
                        <button className="buttons_rooms" onClick={(e)=> handleFooterScroll(e)}>{t("selectPlan.zbron")}</button>
                        <button className="buttons_rooms" onClick={(e)=> handleFooterScroll(e)}>{t("selectPlan.konsultatsiya")}</button>
                    </div>
                  </div>
              </div>
            </div>
            </div>
            <section className='life_diamod_parent'>
      <LifeDiamond />
    </section>
    <Mapcts />
          </div>
  )
}

export default Floor; 