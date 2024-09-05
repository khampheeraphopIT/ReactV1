import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import SearchRoom from "./components/SearchRoom";
import RoomDetails from "./components/RoomDetails";
import Contact from "./components/Contact";
import Login from './components/Login'
import Register from "./components/Register";
import Profile from "./components/Profile";
import Profile1 from './components/Profile';
import bookingDetails from './components/bookingDetail'
import booking from './components/booking'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/SearchRoom' element={<SearchRoom />}></Route>
                <Route path="/RoomDetails/:roomId" element={<RoomDetails />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/bookingDetails/:bookingId" element={<bookingDetails />}></Route>
                <Route path="/booking" element={<booking />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;