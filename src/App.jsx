  import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
  import './App.css'
  import Navbar from './components/Navbar/Navbar'
  import Home from './pages/PagesMain/Home/Home'
  import Project from './pages/PagesMain/Projects/Project'
  import OurSkills from './pages/PagesMain/OurSkills/OurSkills'
  import Aboutuslink from './pages/PagesMain/Aboutus/Aboutuslink'
  import { useTranslation } from 'react-i18next'
  import Control from './pages/PagesMain/Control/Control'
  import Partners from './pages/PagesMain/Partners/Partners'
  import News from './pages/PagesMain/News/News'
import Mapcts from './pages/PagesMain/Mapcts/Mapcts'
import Footer from './pages/PagesMain/Footer/Footer'
import { useLocation } from 'react-router-dom'
  function App() {
    const [langTF, setLangTF] = useState(false)
    const { i18n } = useTranslation();
    const changeLanguage =  useCallback(() => {
      setLangTF(prevLangTF => !prevLangTF)
    }, [] )
    const location = useLocation();

    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);
    useEffect(()=>{
      i18n.changeLanguage(langTF? "ru": "uz")
    }, [langTF, i18n])
    return (
      
        <div className='container'>
        
          <Navbar />
          <Home />
          <Project />
          <OurSkills />
          <Aboutuslink />
          <Control />
          <Partners />
          <News />
          <Mapcts />
          <Footer />
          <button style={{position: "fixed", top: '160px'}} onClick={changeLanguage}>vhange</button>
        </div>
      
    )
  }

  export default React.memo(App);
