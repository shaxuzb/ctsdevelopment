import React, { useEffect, useState } from 'react'
import { asset, imagesLayout } from '../../../assets/asset'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export const ShaxmatkaCardGrid = ({apiApartFilter,projIdShaxmatka,getKorpusId,roomsIdShaxmatka,getStageId,getMinSquare,getMaxSquare,valueFilterShax}) => {
  const navigate = useNavigate()
  const [ num, setNum] = useState();
  let minRoomValue = [];  
  const {t} = useTranslation()
  useEffect(()=>{
    setNum((Math.min(...minRoomValue.map(Number))))
  },[apiApartFilter,roomsIdShaxmatka,getMinSquare,getMaxSquare])
  return (
              <>
              {
                apiApartFilter[getKorpusId-1]?.homes.sort((a, b) =>!valueFilterShax? a.square - b.square:b.square-a.square).filter(status=> status.status == 1&&status.stage == getStageId&&status.square>=getMinSquare&&status.square<=getMaxSquare).filter(roomId => roomId.rooms == roomsIdShaxmatka[0].room && roomsIdShaxmatka[0].checked  || roomId.rooms ==  roomsIdShaxmatka[1].room && roomsIdShaxmatka[1].checked? roomId : !roomsIdShaxmatka[0].checked && !roomsIdShaxmatka[1].checked ? roomId : console.log("hellow baby") ).map((apiApartFilters,index)=>{
                  minRoomValue.push(+apiApartFilters.number)
                  return(
                <div 
                key={index+"shaxmatka_card"} 
                className="card_shaxmatka"
                onClick={()=>navigate(`/${projIdShaxmatka == 1?"project-house":"project-premium"}/${projIdShaxmatka}/blok-id/${getKorpusId}/floor/${apiApartFilters.stage}/room/${apiApartFilters.number}/indexRoom/${(+apiApartFilters.number - num+1)}`)}
                >
                  <div className="header">
                    <h1>{apiApartFilter[0].objects_id == 1?"Diamond House":"Premium House"}</h1>
                    <p>{t("Projects.shaxmatka.filter.korpus")} - {getKorpusId}</p>
                  </div>
                <div className="img_grid_shax">
                    <img data={index} src={imagesLayout.filter(id=> id.square == apiApartFilters.square).map(ma=> ma.planFloor)} alt="image" />
                  </div>
                  <div className="prop_room_shaxmatka">
                    <span>{apiApartFilters.square} м²</span>
                    <span>{apiApartFilters.rooms}-{t("selectPlan.komnatnost2")}</span>
                    <span>{t("selectPlan.floorFrom",
              {
                selectFloor: apiApartFilters.rooms,
                maxFloor: 16
              }
            )}</span>
                  </div>
                </div>
                )
                })
              }
              </>
  )
}

export const ShaxmatkaCardFlex = ({apiApartFilter,projIdShaxmatka,getKorpusId,roomsIdShaxmatka,getStageId,getMinSquare,getMaxSquare,valueFilterShax}) => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  useEffect(()=>{
  },[apiApartFilter,roomsIdShaxmatka,getMinSquare,getMaxSquare])  
  return (
    <>
    {
       apiApartFilter[getKorpusId-1]?.homes.sort((a, b) =>!valueFilterShax? a.square - b.square:b.square-a.square).filter(status=> status.status == 1&&status.stage == getStageId&&status.square>=getMinSquare&&status.square<=getMaxSquare).filter(roomId => roomId.rooms == roomsIdShaxmatka[0].room && roomsIdShaxmatka[0].checked  || roomId.rooms ==  roomsIdShaxmatka[1].room && roomsIdShaxmatka[1].checked? roomId : !roomsIdShaxmatka[0].checked && !roomsIdShaxmatka[1].checked ? roomId : console.log("hellow baby") ).map((apiApartFilters,index)=>{
       return(<div className="card_flex_table" 
       onClick={()=>navigate(`/${projIdShaxmatka == 1?"project-house":"project-premium"}/${projIdShaxmatka}/blok-id/${getKorpusId}/floor/${apiApartFilters.stage}/room/${apiApartFilters.number}`)}
       >
            <img src={imagesLayout.filter(id=> id.square == apiApartFilters.square).map(ma=> ma.planFloor)} alt="card" />
            <h1>{apiApartFilter[0].objects_id == 1?"Diamond House":"Premium House"}</h1>
            <span>{apiApartFilters.square} м²</span>
            <span>{t("Projects.shaxmatka.filter.korpus")} - {getKorpusId}</span>
            <span>{apiApartFilters.rooms}-{t("selectPlan.komnatnost2")}</span>
            <span>{t("selectPlan.floorFrom",
              {
                selectFloor: apiApartFilters.rooms,
                maxFloor: 16
              }
            )}</span>
        </div>
       )
      })
    }
      </>
    )
  }