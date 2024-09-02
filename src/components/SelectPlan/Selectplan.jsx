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
        {d_path_room: "M511 566.5V589.5L446 590V566.5H422V590H354.5V566.5H342V426H396.5V331.5H529.5V566.5H511Z"},
        {d_path_room: "M325 567V589V590H259.5V567H240.5V532.5H233.5V556.5H168.5V532.5H147.5V389H112V366H89V302H112V298H343V331.5H390V420.5H337.5V567H325Z"}, 
        {d_path_room: "M343 256V292H112.5V289H90V224.5H112.5V200.5H148V57H168V34.5H234V57H241V23H259.5V1H325V23H340V256H343Z"}, 
        {d_path_room: "M523.5 203.5V256.5L343 256V23H355V1H420V23H446.5V1H511V23H540.762V1H605.5V23H616.5V203.5H523.5Z"}, 
        {d_path_room: "M715.17 202.896V256L896 255.499V22.0431H883.978V0H818.859V22.0431H792.311V0H727.693V22.0431H697.876V0H633.02V22.0431H622V202.896H715.17Z"}, 
        {d_path_room: "M896 255V291H1125.59V288H1148V223.5H1125.59V199.5H1090.23V56H1070.31V33.5H1004.57V56H997.597V22H979.17V0H913.929V22H898.988V255H896Z"}, 
        {d_path_room: "M913.784 566V588V589H979.066V566H998.003V531.5H1004.98V555.5H1069.76V531.5H1090.69V388H1126.08V365H1149V301H1126.08V297H895.844V330.5H849V419.5H901.326V566H913.784Z"}, 
        {d_path_room: "M727.549 565.545V588.501L792.723 589V565.545H816.787V589H884.467V565.545H897V425.317H842.355V331H709V565.545H727.549Z"},
    ]}, 
    {roomPlanFloor:[
        {d_path_room: "M519.5 353L518 629.5H326V595H330.5V444.5H381.5V353H519.5Z"},
        {d_path_room: "M325.5 594V596L134 594V559.5H132V413H95.5V412V318.5H333.5V352.5L381.5 353V444.5H330.5V594H325.5Z"}, 
        {d_path_room: "M334.5 311.5H97H95V217L132 216.781V69H132.5H133.5V36H228.5V34.5H327V275.5H334.5V311.5Z"}, 
        {d_path_room: "M331.5 34.5V2.5L524.5 2V34H619V220H520V275H327V34.5H331.5Z"}, 
        {d_path_room: "M907.5 34.5V2.5L714.5 2V34H620V220H719V275H912V34.5H907.5Z"}, 
        {d_path_room: "M905 312H1142H1144V217.159L1107.08 216.939V68.6245H1106.58H1105.58V35.5054H1010.78V34H912.484V275.87H905V312Z"}, 
        {d_path_room: "M913 593.996V596L1104.5 593.996V559.434H1106.5V412.67H1143V411.668V318H905V352.061L857 352.562V444.227H908V593.996H913Z"}, 
        {d_path_room: "M720 353L721.496 629H913V594.562H908.512V444.335H857.643V353H720Z"},
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
        contextApiFloor.datasFetch.filter(stageId => stageId.stage == params.id).map(elem=>{
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
                    <Link key={index+"btns_key_select_plan"} className={btn_arr_select_floor == params.id? "active": ""}
                        to={`/${params.projectName}/${params.projIndex}/blok-id/${params.idBlock}/floor/${btn_arr_select_floor}`}>
                            {index+1}
                    </Link>
                    )    
            })

            }
        </div>
        
        <motion.div className={disbledImages?"div_container_select_plan_image disabledPlanImages":"div_container_select_plan_image"} >
            
            <img src={floorApiRooms.find(floor => floor.stage == "1")?asset.selectplanimgfirstfloor:asset.selectplanimg} alt="selectplanimg" />
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 1240 644' fill='none' xmlns="http://www.w3.org/2000/svg">
                
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
                                        
                                    <path className={floorRoomsLayout.status == 3?"disabledred": ""} style={floorRoomsLayout.stage == 1 ?{
                                        translate: "38px 0px",
                                        scale: "0.94"
                                    }:null} xmlns="http://www.w3.org/2000/svg" d={floorRoomsLayout.stage == 1?roomPlan[0].roomPlanFloor[index].d_path_room:roomPlan[1].roomPlanFloor[index].d_path_room}>
                                        
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