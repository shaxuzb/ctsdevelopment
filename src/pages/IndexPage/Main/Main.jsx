import React, { useRef } from 'react'
import '../../../App.css'
import Navbar from '../../../components/Navbar/Navbar'
import Home from '../../../pages/PagesMain/Home/Home'
import Project from '../../../pages/PagesMain/Projects/Project'
import OurSkills from '../../../pages/PagesMain/OurSkills/OurSkills'
import Aboutuslink from '../../../pages/PagesMain/Aboutus/Aboutuslink'
import Control from '../../../pages/PagesMain/Control/Control'
import Partners from '../../../pages/PagesMain/Partners/Partners'
import News from '../../../pages/PagesMain/News/News'
import Mapcts from '../../../pages/PagesMain/Mapcts/Mapcts'
import Footer from '../../../pages/PagesMain/Footer/Footer'
import { motion } from 'framer-motion';
function Main() {
    
  
  const footerRef = useRef()
  return (
    
      <motion.div 
        initial="hidden"
        animate="visible"
        whileInView={{opacity: 1, transition:{duration: 1}}}
        exit={{opacity: 0, transition: {duration: 1} }}
        className='container'>
        <Navbar footerRef={footerRef} />
        <Home />
        <Project />
        <OurSkills />
        <Aboutuslink />
        <Control />
        <Partners />
        <News />
        <Mapcts />
        <Footer footerRef={footerRef} />
      </motion.div>
    
  )
}

  export default React.memo(Main);
