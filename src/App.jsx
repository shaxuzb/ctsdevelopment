import React, { useLayoutEffect, cloneElement, Suspense } from 'react'

import './App.css'
import Main from './pages/IndexPage/Main/Main';
import AboutUs from './pages/IndexPage/Aboutus/AboutUs';
import ProjectPremium from './pages/IndexPage/Projects/Projectpremium/ProjectPremium';
import ProjectHouse from './pages/IndexPage/Projects/Projecthouse/ProjectHouse';
import SelectFloor from './pages/IndexPage/SelectFloor/SelectFloor';
import NewsIdPage from './components/NewsIdPage/NewsIdPage';
import News from './pages/IndexPage/NewsPage/NewsIndex';
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Floor from './components/Floor/Floor';
import Selectplan from './components/SelectPlan/Selectplan';
import RoomsLayout from './components/RoomsLayoutPlan/RoomsLayout';
import Selectaparments from './pages/IndexPage/SelectApartments/Selectaparments';
import ProjectPage from './pages/IndexPage/Projects/Projects/ProjectPage';
import Login from './pages/login/Login';
function App() {
  const location = useLocation()
  useLayoutEffect(() => {
      setTimeout(()=>{
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
      },1000)
  }, [location.pathname]);
  const pages = useRoutes([
    {
        path: "/",
        element: <Main />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
        path: "/aboutus",
        element: <AboutUs />
    },
    {
        path: "/projects",
        element: <ProjectPage />
    },
    {
        path: "/project-premium",
        element: <ProjectPremium />
    },
    {
        path: "/project-house",
        element: <ProjectHouse />
    },
    {
      path: "/select-apartment",
      element: <Selectaparments />
    },
    {
        path: "/:projectName/:projIndex/blok-id/:idBlock",
        element: <SelectFloor />,
        children:[
          {
            path: "/:projectName/:projIndex/blok-id/:idBlock",
            element: <Floor />
          },
          {
            path: "/:projectName/:projIndex/blok-id/:idBlock/floor/:id",
            element: <Selectplan />
          },
          {
            path: "/:projectName/:projIndex/blok-id/:idBlock/floor/:id/room/:roomId/indexRoom/:indexRoom",
            element: <RoomsLayout />,
            errorElement:<div>303</div>
          }
        ]
    },
    {
        path: "/news",
        element: <News />
        
    },
    {
        path: "/news/newsId/:id",
        element: <NewsIdPage />
    }
])

if(!pages) return null
  return (

    <AnimatePresence mode='wait'>
      {
        cloneElement(pages, {key: location.pathname})
      }
    </AnimatePresence>
    
  )
}

  export default React.memo(App);
