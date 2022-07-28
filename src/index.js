import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from "./App";
import Bootcamp from './components/Posts/Bootcamp.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { BrowserRouter, Routes, Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <header>
                <Navbar />
            </header>
            <body>
                <Main />
            </body>
            <footer>
                <Footer />
            </footer>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
