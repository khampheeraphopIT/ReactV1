import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import SearchRoom from "./components/SearchRoom";
import RoomDetails from "./components/RoomDetails";
import Contact from "./components/Contact";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/SearchRoom' element={<SearchRoom />}></Route>
                <Route path="/RoomDetails/:roomId" element={<RoomDetails />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;