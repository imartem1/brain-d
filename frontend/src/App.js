import React, {useState} from 'react';
import './index.css'
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import NewPage from "./pages/newPage";
import MainPage from "./pages/mainPage";
import StartPage from './pages/startPage';


function App() {
    const [linkpath, setLinkpath] = useState('/static/nrtl/test.gltf')
    const changePath = (newPath) => {
        
        setLinkpath(newPath)
        
        
        
    }
    //setLinkpath('ye ntcn')
    return(
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links m-15 p-0">
                    <Link className="navbar__link m-3"to="/main">3D</Link>
                    <Link className="navbar__link m-3" to="">Главная страница</Link>
                </div>
                
            </div>
            <Routes>
                <Route path="/main" element={<MainPage
                    linkpath={linkpath}
                />}/>
                <Route path="" element={<StartPage
                    change={changePath}
                />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
