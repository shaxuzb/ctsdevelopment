import React, { useEffect, useRef, useState } from 'react'
import RangeSlider from 'react-range-slider-input';
import { motion } from 'framer-motion'
import './filtershaxmatka.css'
import { IoIosClose } from "react-icons/io";
import 'react-range-slider-input/dist/style.css';
import { useTranslation } from 'react-i18next';

const initialButtonRooms = [
    { id: 1, room: '1', checked: false },
    { id: 2, room: '2', checked: false },
    { id: 3, room: '3', checked: false },
    { id: 4, room: '4', checked: false }
  ]
const FilterShaxmatka = ({apiApartFilter,getProjIdShaxmatka,projIdShaxmatka,getKorpusIdShaxmatka,korpusIdShaxmatka,roomsIdShaxmatka,getRoomsIdShaxmatka,getStageIdshaxmatka,stageIdshaxmatka,setGetMinSquare,setGetMaxSquare}) => {
    const [getProject, setGetProject] = useState(projIdShaxmatka) 
    const [getFloor, setGetFloor] = useState(stageIdshaxmatka) 
    const [getKorpus, setGetKorpus] = useState(korpusIdShaxmatka)
    const [minSizeValue, setMinSizeValue] = useState(37.5) 
    const [disabledFilter, setDisabledFilter] = useState(false)
    const [maxSizeValue, setMaxSizeValue] = useState(62.9) 
    const [projectValueOpen, setProjectValueOpen] = useState(false)
    const [floorOpen, setFloorOpen] = useState(false)
    const [korpusOpen, setKorpusOpen] = useState(false)
    const { t } = useTranslation()
    const toggleCheckbox = (id) => {
    getRoomsIdShaxmatka(prevItems =>
        prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
        )
    );
    };
    const shaxFilterDatas =[
        {
            datavalue: 1,
            projectFiltName: "Diamond House"
        },
        {
            datavalue: 2,
            projectFiltName: "Premium House"
        }
    ]


    const tagRef = useRef([]);

  
    useEffect(() => {
        const callback = (mutationsList) => {
          for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                setDisabledFilter(true)
            }
          }
        };
    
        const observer = new MutationObserver(callback);
    
        // Observe each tag for changes
        tagRef.current.forEach(tag => {
          if (tag) {
            observer.observe(tag, { childList: true, characterData: true, subtree: true });
          }
        });
    
        // Cleanup function to disconnect the observer
        return () => {
          observer.disconnect();
        };
      }, [disabledFilter]);

    const handleResetFilter = ()=>{
        getProjIdShaxmatka(1)
        setGetProject(1)
        setGetFloor(1)
        setGetKorpus(1)
        setMinSizeValue(32.5)
        setMaxSizeValue(62.9)
        getRoomsIdShaxmatka(initialButtonRooms)
        setDisabledFilter(false)
    }
    useEffect(()=>{
        getProjIdShaxmatka(getProject)
        getKorpusIdShaxmatka(getKorpus)
        getStageIdshaxmatka(getFloor)
        setGetMinSquare(minSizeValue)
        setGetMaxSquare(maxSizeValue)
    },[apiApartFilter,getProject,getKorpus,getFloor,minSizeValue,maxSizeValue])
  return (
    <>
    <div className='filter_shaxmatka'>
        <div className="select_project_shaxmatka filters_shax">
            <p>{t("Projects.shaxmatka.filter.object")}</p>
            <div className="input_select_proj_parent child_filters_shax">
            <div className="input_select_project"  ref={el => tagRef.current[0] = el}>
                <div
                
                onClick={(e)=> setProjectValueOpen(prev => !prev)} 
                className='selected_filter_project'>
                    {getProject==1?"Diamond House":"Premium House"}
                </div>
                <motion.div
                animate={projectValueOpen?"open":"closed"}
                variants={{
                  open:{
                    display: "block",
                    opacity: 1,
                      transition: {duration: .3}
                  },
                  closed:{
                    opacity: 0,
                    height: 0,
                    transition: {duration: .3}
                  }
                }}
                className="values_select_inp"
                >
                    {
                        shaxFilterDatas.map((shaxFilterData, index)=>{
                            return (
                                <div
                                key={index+"filter_project"} 
                                onClick={()=> setProjectValueOpen(prev => !prev)} 
                                className={getProject == shaxFilterData.datavalue  ?"pad_proj_values active":"pad_proj_values"} 
                                >
                                    <div className='proj_values'
                                    datavalue={shaxFilterData.datavalue} 
                                    name="object"
                                    onClick={(e)=> {
                                        setGetProject(prev => prev = shaxFilterData.datavalue)
                                        }} >
                                        {shaxFilterData.projectFiltName}
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
            </div>
        </div>
        <div className="select_rooms filters_shax">
            <p>{t("Projects.shaxmatka.filter.room")}</p>
            <div className="rooms_selection child_filters_shax"   ref={el => tagRef.current[1] = el}>
                {
                    roomsIdShaxmatka.map((room, index)=>{
                        return(
                            <button 
                            key={index+"room_button"}
                            className={room.checked?"active":""}

                            style={apiApartFilter[getKorpus-1]?.homes.find(e=> e.rooms == room.id&&e.stage == getFloor&&e.status == 1)?{
                            }:{
                                pointerEvents: "none",
                                opacity: .4
                            }}
                            onClick={()=> toggleCheckbox(room.id)}>
                                {room.room}
                            </button>
                        )
                    })
                }
            </div>
        </div>
        <div className="select_size_room filters_shax">
            <p>{t('Projects.shaxmatka.filter.square')}, м²</p>
            <div className="size_selection_room child_filters_shax"   ref={el => tagRef.current[2] = el}>
                <div className="div_datas_size">
                    <div className="properties_size">
                        <p>от <span>{minSizeValue.toFixed(1)}</span></p>
                        <div className='line'></div>
                        <p>до <span>{maxSizeValue.toFixed(1)}</span></p>
                    </div>
                    <RangeSlider className="slider_range_inp_size" min={37.5}  max={62.9} value={[minSizeValue,maxSizeValue]} defaultValue={[minSizeValue,maxSizeValue]} step={0.1} onInput={e=>{
                        setMinSizeValue(e[0])
                        setMaxSizeValue(e[1])
                       
                    }}/>
                </div>
            </div>
        </div>
        <div className="select_floor_filter filters_shax">
            <p>{t("Projects.shaxmatka.filter.stage")}</p>
            <div className="selection_floor_parent child_filters_shax"   ref={el => tagRef.current[3] = el}>
                <motion.div 
                whileHover={!floorOpen?{
                        borderRadius: "50%",
                        backgroundColor: "#97815F40",
                }:{
                    borderRadius: "5px",
                    backgroundColor: "#97815F40"  
                }}
                className="selection_floor_user"
                onClick={(e)=> setFloorOpen(prev => !prev)}
                >
                    {getFloor?getFloor:1}
                </motion.div>
                <motion.div 
                 animate={floorOpen?"open":"closed"}
                 variants={{
                   open:{
                     display: "block",
                     opacity: 1,
                       transition: {duration: .3}
                   },
                   closed:{
                     opacity: 0,
                     height: 0,
                     transition: {duration: .3}
                   }
                 }}
                
                className="table_floors_filt">
                    {
                        Array.from({length: 16}, (v,i)=> i+1).map((floors_select,index)=>{
                            return(
                                <div
                                key={index+"floor_select_filter"} 
                                className={getFloor == floors_select  ?"floor_select_value active":"floor_select_value"} 
                                onClick={(e)=> {
                                    setGetFloor(floors_select)
                                    setFloorOpen(prev => !prev)
                                }} 
                                >
                                    <span>{floors_select}</span>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
        <div className="select_floor_filter filters_shax">
            <p>{t("Projects.shaxmatka.filter.korpus")}</p>
            <div className="selection_floor_parent child_filters_shax" >
                <motion.div 
                  ref={el => tagRef.current[4] = el}
                whileHover={!korpusOpen?{
                        backgroundColor: "#97815F40",
                }:{
                    backgroundColor: "#97815F40"  
                }}
                className="selection_korpus_user"
                onClick={(e)=> setKorpusOpen(prev => !prev)}
                >
                    {t("Projects.shaxmatka.filter.korpus")} {getKorpus?getKorpus:1}
                </motion.div>
                <motion.div 
                 animate={korpusOpen?"open":"closed"}
                 variants={{
                   open:{
                     display: "block",
                     height: apiApartFilter.length+"00%",
                     opacity: 1,
                       transition: {duration: .3}
                   },
                   closed:{
                     opacity: 0,
                     height: 0,
                     transition: {duration: .3}
                   }
                 }}
                
                className="table_korpus_filt">
                    {
                        apiApartFilter.map((korpus_select,index)=>{
                            return(
                                <div
                                key={index+"floor_select_filter"} 
                                className={getKorpus == index+1  ?"korpus_select_value active":"korpus_select_value"} 
                                onClick={(e)=> {
                                    setGetKorpus(index+1)
                                    setKorpusOpen(prev => !prev)
                                }} 
                                >
                                    <span>{t("Projects.shaxmatka.filter.korpus")} {index+1}</span>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    </div>
    <div>
    </div>
    <div className="resetFilter" style={disabledFilter?{visibility: "visible", pointerEvents: "auto"}:{visibility: "hidden",pointerEvents: "none"}}>
        <span onClick={()=> handleResetFilter()}>{t("Projects.shaxmatka.filter.clearFilter")} <IoIosClose /></span>
    </div>
    </>
  )
}

export default FilterShaxmatka