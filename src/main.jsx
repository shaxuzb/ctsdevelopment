import React, {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './api/i18n/i18n.js';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(

        <BrowserRouter basename='/'>
            <Suspense>
                <App />
                <ToastContainer theme="light" position='bottom-left' />
            </Suspense>
        </BrowserRouter>
)
