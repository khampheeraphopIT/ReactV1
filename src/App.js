import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import SearchRoom from "./components/SearchRoom";
import RoomDetails from "./components/RoomDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/SearchRoom' element={<SearchRoom />}></Route>
                <Route path="/RoomDetails" element={<RoomDetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;