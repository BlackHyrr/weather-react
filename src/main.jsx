import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProvideApiContext from './utils/apiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProvideApiContext>
            <App />
        </ProvideApiContext>
    </React.StrictMode>,
)
