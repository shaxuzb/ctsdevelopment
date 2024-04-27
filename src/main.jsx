import React, {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const LazyAboutUs = lazy(()=> import('./pages/IndexPage/Aboutus/AboutUs.jsx')) 
const LazyProjectHouse = lazy(()=> import('./pages/IndexPage/Projects/Projecthouse/ProjectHouse.jsx')) 
const LazyProjectPremium = lazy(()=> import('./pages/IndexPage/Projects/Projectpremium/ProjectPremium.jsx')) 
const LazyContacts = lazy(()=> import('./pages/IndexPage/NewsPage/NewsIndex.jsx'));
const LazyNewsIdPage = lazy(()=> import('./components/NewsIdPage/NewsIdPage.jsx'));
import ScrollToTopReactRouter from './components/ScrollToTopReactRouter.jsx'
import './index.css'
import './api/i18n/i18n.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/aboutus",
        element: <Suspense fallback="Loading About US page">
                    <ScrollToTopReactRouter />
                    <LazyAboutUs />
                 </Suspense>
    },
    {
        path: "/project-premium",
        element: <Suspense fallback="Loading Projects page">
                    <ScrollToTopReactRouter />
                    <LazyProjectPremium />
                 </Suspense>
    },
    {
        path: "/project-house",
        element: <Suspense fallback="Loading Projects page">
                    <ScrollToTopReactRouter />
                    <LazyProjectHouse />
                 </Suspense>
    },
    {
        path: "/news",
        element:  <Suspense fallback="Loading Contacts page">
                        <ScrollToTopReactRouter />
                        <LazyContacts />
                   </Suspense>,
        
    },
    {
            path: "/news/newsId/:id",
            element:
            <Suspense fallback="Loading...IDNEWS">
                <ScrollToTopReactRouter />
                <LazyNewsIdPage />
            </Suspense> 
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Suspense fallback="LoadingTheAPP JS">
        <RouterProvider
        router={router} 
        >
        </RouterProvider>
    </Suspense>
)
