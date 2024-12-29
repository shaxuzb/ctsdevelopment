import React, {  useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { asset } from '../../assets/asset';
import { motion } from 'framer-motion';
import { FcLike } from "react-icons/fc";
import * as HoverCard from '@radix-ui/react-hover-card';
import BlockFloor from '../../api/axios/ContextFloor';
import Backtopage from '../BackToPage/Backtopage';
import LifeDiamond from '../LifeDiamond/LifeDiamond';
import { useTranslation } from 'react-i18next';
import Mapcts from '../../pages/PagesMain/Mapcts/Mapcts';
const roomPlan = [
    {roomPlanFloor:[
        {d_path_room: "M49 877H382.5L382 49H49V877Z"},
        {d_path_room: "M382.5 48.5L383 877H546.5V517H729.5V49.5L382.5 48.5Z"}, 
        {d_path_room: "M547 519.5V877L886.5 876V823H1013V818.5V519.5H547Z"}, 
        {d_path_room: "M1001 49.5V466H1351.5V49H1001"}, 
        {d_path_room: "M1351.5 466.5V879.5H1001V824H1013.5V518.5H1001V466.5H1351.5Z"}, 
    ]}, 
    {roomPlanFloor:[
        {d_path_room: "M39.5 533H272V328.5H39.5V533Z"},
        {d_path_room: "M39.5 38.5V328L272.5 327.5V38.5H39.5Z"}, 
        {d_path_room: "M705.5 39.5H465.5L468 327.5H705.5V39.5Z"}, 
        {d_path_room: "M942 39.5H706V327.5H942V39.5Z"}, 
        {d_path_room: "M1373.5 39.5H1134.5L1136 325L1373.5 327V39.5Z"}, 
        {d_path_room: "M1374 535.5V328.5L1141.5 325.5V535.5H1374Z"}, 
        {d_path_room: "M1140 535.5H937.5V328.5H1140.5V535.5"}, 
        {d_path_room: "M937 328.5V535.5L706 536.5V327.5L937 328.5Z"},
        {d_path_room: "M473 536.5H705V328H473V536.5Z"},
        {d_path_room: "M472.5 536.5L272.5 533V328H472.5V535.793"},
    ]}
    , 
    {roomPlanFloor:[
        {d_path_room: "M31.5 539.5H270L268.5 39.5H31.5V539.5Z"},
        {d_path_room: "M705.5 40H465L468 538H705.5V40Z"}, 
        {d_path_room: "M943.5 40.5H705.5L707.5 538.5H943.5V40.5Z"}, 
        {d_path_room: "M1382.5 39H1141.5L1145 537.5H1382.5V39Z"}, 
        {d_path_room: "M946.5 538H1139.5V326.5H946.5V538Z"}, 
        {d_path_room: "M269.5 539.5H468L464.5 332.5H269.5V539.5Z"}, 
    ]}
   
]
const btns_arr_select_floor = Array.from({ length: 16 }, (v, i) => i+1);
const Selectplan = () => {
    const [floorApiRooms, setFloorApiRooms] = useState([])
    const [favorites, setFavorites] = useState( !localStorage.getItem("favourites")?[]:JSON.parse(localStorage.getItem("favourites")))
    const [roomIndex, setRoomIndex] = useState(0)
    const [disbledImages, setDisabledImages] = useState(false)
    const [favoriteStatus, setFavoriteStatus] = useState({})
    const params = useParams()
    const contextApiFloor = useContext(BlockFloor)
    const refChet = useRef(null)
    const parentApi = []
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [ num, setNum] = useState();
    let minRoomValue = []; 
    const floorRoomsApi = async ()=>{
        contextApiFloor.datasFetch.filter(stageId =>params.id == 0 ?stageId.stage == -1 : stageId.stage == params.id).map(elem=>{
            parentApi.push(elem)
            setFloorApiRooms(parentApi)
        })
    }
    const [footerRef,handleFooterScroll] = useOutletContext()
    const setLocalStorageFavorites = (index)=>{
        const dataFavorites = floorApiRooms.find(id=> id.id == index)
        if(favorites.length == 0){
            setFavorites([...favorites, {"status":true,"data":dataFavorites}])
        }
        else{
            const res = favorites.find(prev=>prev?.data.id == index)
            if(res == undefined){
                setFavorites([...favorites, {"status":true,"data":dataFavorites}])
            }
        }
    }
    const handleFavoriteButtonClick = (id) => {
        setFavoriteStatus((prevStatus) => ({
          ...prevStatus,
          [id]: !prevStatus[id],
        }));
      };
    const deleteLocalStorageFavorites = (index)=>{
        const favouritesObject = JSON.parse(localStorage.getItem("favourites"))
            let temp = favouritesObject.filter(prev=> prev.id != index)
            setFavorites(temp)
    }
    useEffect(()=>{
        floorRoomsApi()
        localStorage.setItem("favourites", JSON.stringify([...favorites]))
    },[contextApiFloor,favorites,localStorage,favoriteStatus])
    useEffect(()=>{
        setNum((Math.min(...minRoomValue.map(Number))))
    },[floorApiRooms])
    console.log(floorApiRooms);
    
    return (
    <>
    <div className='res_toback_select_floors'>
    <Backtopage  titleBack={t("selectPlan.backToPageFloor")}/>
    <div className="select_floors">
    <div className='max_widht_select_plan'>
        <div className='select_floor_btns_select_plan'>
            {
                btns_arr_select_floor.map((btn_arr_select_floor, index)=>{
                    return( 
                    <Link key={index+"btns_key_select_plan"} className={index == params.id? "active": ""}
                        to={`/${params.projectName}/${params.projIndex}/blok-id/${params.idBlock}/floor/${index}`}>
                            {index}
                    </Link>
                    )    
            })

            }
        </div>
        
        <motion.div className={disbledImages?"div_container_select_plan_image disabledPlanImages":"div_container_select_plan_image"} >
            
            <img src={params.id == 0 ? asset.selectplanimgzedfloor : params.id == 1 ? asset.selectplanimgfirstfloor : asset.selectplanimg} alt="selectplanimg" />
            <svg preserveAspectRatio='xMidYMid slice' viewBox={`0 0 1411 ${params?.id == 0? 575 : params?.id == 1 ? 575 : 916}`} fill='none' xmlns="http://www.w3.org/2000/svg">
                
                    {floorApiRooms.map((floorRoomsLayout, index)=>{
                        minRoomValue.push(+floorRoomsLayout.number)
                        return(
                            <HoverCard.Root key={index + 'selectplan'}>
                                <HoverCard.Trigger asChild={true}>
                                    <Link to={`/${params.projectName}/${params.projIndex}/blok-id/${params.idBlock}/floor/${params.id}/room/${floorRoomsLayout.number}/indexRoom/${(+floorRoomsLayout.number - num+1)}`} key={index+"roomsLayout"} 
                                    onMouseEnter={()=> {
                                    setRoomIndex(index)
                                    }}
                                    onClick={()=> setDisabledImages(true)}
                                    >
                                        
                                    <path className={floorRoomsLayout.status == 3?"disabledred lightLight": ""} style={floorRoomsLayout.stage == 1 ?{
                                        translate: "38px 0px",
                                        scale: "0.94"
                                    }:null} xmlns="http://www.w3.org/2000/svg" d={params.id == 0 ? roomPlan[2]?.roomPlanFloor[index]?.d_path_room : params.id == 1 ?roomPlan[1]?.roomPlanFloor[index]?.d_path_room: roomPlan[0]?.roomPlanFloor[index]?.d_path_room}>
                                        
                                    </path>
                                    </Link>
                                </HoverCard.Trigger>
                                <HoverCard.Portal>
                                    <HoverCard.Content className={disbledImages?'HoverCardContent displayNone': "HoverCardContent"}data-side='top' side='right' style={{zIndex:8}}>
                                    <div className='card_map'>
                                            <div className="size_rooms_like">
                                            <div className="size_rooms">
                                                <h1>{floorRoomsLayout.square} м²</h1>
                                                <span>{t("selectPlan.apartment")}</span>
                                            </div>
                                            <div className="favourite_rooms" 
                                                onClick={(e)=>{
                                               
                                                handleFavoriteButtonClick(floorRoomsLayout.id)
                                                setLocalStorageFavorites(floorRoomsLayout.id)
                                                if(favoriteStatus[floorRoomsLayout.id]){
                                                    deleteLocalStorageFavorites(floorRoomsLayout.id)
                                                }
                                                }}
                                            >
                                                <FcLike className={favoriteStatus[floorRoomsLayout.id]?"favouriteTrue":""} data-id={floorRoomsLayout.id}  />
                                            </div>
                                            </div>
                                            <div className="btns_about_rooms">
                                                <button>{floorRoomsLayout.rooms}-{t("selectPlan.komnatnost2")}</button>
                                                <button>{params.id} {t("Projects.shaxmatka.filter.stage")}</button>
                                            </div>
                                            <div className="btns_select_order">
                                                <button onClick={(e)=> handleFooterScroll(e)}>{t("selectPlan.zbron")}</button>
                                                <button onClick={(e)=> handleFooterScroll(e)}>{t("selectPlan.konsultatsiya")}</button>
                                            </div>
                                            <div className="more_info_rooms">
                                                <button onClick={()=> {
                                                    navigate(`/${params.projectName}/${params.projIndex}/blok-id/${params.idBlock}/floor/${params.id}/room/${floorRoomsLayout.number}/indexRoomInFloor/${index+1}`)
                                                    setDisabledImages(true)
                                                    }}>{t("selectPlan.podrobnee")}</button>
                                            </div>
                                    </div>
                                    <HoverCard.Arrow className="HoverCardArrow" />
                                    </HoverCard.Content>
                                </HoverCard.Portal>
                            </HoverCard.Root>
                            
                        )
                    })}
            </svg>
        </motion.div>
    </div>
   
    </div>
   
    </div>
    <section className='life_diamod_parent'>
      <LifeDiamond />
    </section>
    <Mapcts />
    </>
  )
}

export default Selectplan