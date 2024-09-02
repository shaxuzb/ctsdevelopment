import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
const Backtopage = ({titleBack}) => {
  const navigateBack = useNavigate()
  const params = useParams()
  return (
    <div className='back_res_page'>
        <a onClick={()=> navigateBack(params.id?`/${params.projectName}/${params.projIndex}/blok-id/${params.idBlock}/floor`:params.idBlock&&`/${params.projectName}`)} ><IoIosArrowRoundBack /> <span>{titleBack}</span></a>
    </div>
  )
}

export default Backtopage