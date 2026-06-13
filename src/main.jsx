import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router'
import App from './App.jsx'
import Career from './Career.jsx'
import Writing from './Writing.jsx'
import StoryPage from './StoryPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/career" element={<Career />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/writing/:slug" element={<StoryPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
