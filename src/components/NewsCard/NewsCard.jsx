import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import { color } from "framer-motion";
const NewsCard = ({limit,navigate_news_index}) => {
    const [getApiNews, setGetApiNews] = useState([])
    const [ loading , setLoading ] = useState(true)
    const navigate = useNavigate()
    let getLangStorrage = localStorage.getItem('i18nextLng')
    async function fetchApi(){
        try{
            setLoading(true)
            await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}`).then(datas =>{
            setGetApiNews(datas.data.results);
                setLoading(false)
        })
        }
   catch(err){
    console.log(err);
   }
}
    useEffect(()=>{
       
       fetchApi()
    },[getLangStorrage,limit])
    return(
        <>
        {
        
        getApiNews.map((getApiNew, index)=>{
            const matchTime = getApiNew.published_at
            let setara = matchTime.search('T')
            let rest = matchTime.slice(0,setara);
            let result  = rest.split('-')
            let finishedRes = `${result[2]}.${result[1]}.${result[0]}`
            return(
                <>
                <div className="news" key={index} onClick={()=> navigate_news_index? navigate(navigate_news_index): navigate(`newsId/${getApiNew.id}`)} style={{cursor:'pointer'}} >
                  
                    <div className="text_news_date">
                        <div className="text_title_news">
                            <h1>{getApiNew.title}</h1>
                            <p>{getApiNew.summary}</p>
                        </div>
                        <div className="date_news">
                            <p>{finishedRes}</p>
                        </div>
                    </div>
                    
                </div>
                </>
            )
        })
       
        
    }
    {
        loading? <div className="loading_spinner">
        <ClipLoader
    color={{
        color: "red" 
    }}
    loading={loading}
    cssOverride={{
        display: "block"
    }}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    </div>:null
    }
    </>
    )
}

export default NewsCard