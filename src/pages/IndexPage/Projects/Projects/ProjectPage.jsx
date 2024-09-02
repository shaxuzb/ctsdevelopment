import { motion } from "framer-motion"
import Navbar from "../../../../components/Navbar/Navbar"
import Project from "../../../PagesMain/Projects/Project"
import Footer from "../../../PagesMain/Footer/Footer"
import { asset } from "../../../../assets/asset"
import { useRef } from "react"
import '../projectschoose.css'
const ProjectPage = () => {
    const footerRef = useRef()
  return (
    <motion.div 
        initial="hidden"
        animate="visible"
        whileInView={{opacity: 1, transition:{duration: 1}}}
        exit={{opacity: 0, transition: {duration: 1} }}
        className='container'>
            <Navbar bg_image_in_Proj={asset.navLogoBlack} color_nav_list={'proj_style_nav_list'} footerRef={footerRef} />
            <div className="project_page_project">
            <Project />
            </div>
            <Footer footerRef={footerRef} />
    </motion.div>
  )
}

export default ProjectPage