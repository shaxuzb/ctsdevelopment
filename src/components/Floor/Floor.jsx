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
    { floor: 16, d_path: "M569 129.029H76V176.039H569V129.029Z" },
    { floor: 15, d_path: "M569 176.039H76V223.049H569V176.039Z" },
    { floor: 14, d_path: "M569 223.049H76V270.06H569V223.049Z" },
    { floor: 13, d_path: "M569 270.06H76V317.07H569V270.06Z" },
    { floor: 12, d_path: "M569 317.07H76V366.081H569V317.07Z" },
    { floor: 11, d_path: "M570 366.081H76V413.091H569V366.081Z" },
    { floor: 10, d_path: "M570 413.091H76V460.102H569V413.091Z" },
    { floor: 9, d_path: "M570 460.102H76V509.113H569V460.102Z" },
    { floor: 8, d_path: "M569 509.113H76V556.123H569V509.113Z" },
    { floor: 7, d_path: "M569 556.123H76V603.133H569V556.123Z" },
    { floor: 6, d_path: "M569 603.133H76V651.144H569V603.133Z" },
    { floor: 5, d_path: "M570 651.144H76V699.155H569V651.144Z" },
    { floor: 4, d_path: "M570 699.155H76V747.165H569V699.155Z" },
    { floor: 3, d_path: "M570 747.165H76V795.176H569V747.165Z" },
    { floor: 2, d_path: "M569 795.176H76V843.186H569V795.176Z" },
    { floor: 1, d_path: "M570 843.182H76V894.199H569V843.187Z" },
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
                <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 640 970' fill='none' xmlns="http://www.w3.org/2000/svg">
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