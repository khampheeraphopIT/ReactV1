import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import properties_01 from '../assets/images/property-01.jpg'
import properties_02 from '../assets/images/property-02.jpg'
import properties_03 from '../assets/images/property-03.jpg'
import properties_04 from '../assets/images/property-04.jpg'
import properties_05 from '../assets/images/property-05.jpg'
import properties_06 from '../assets/images/property-06.jpg'
import Logo from '../assets/images/logo.jpg'

const images = {
    'property-01.jpg': properties_01,
    'property-02.jpg': properties_02,
    'property-03.jpg': properties_03,
    'property-04.jpg': properties_04,
    'property-05.jpg': properties_05,
    'property-06.jpg': properties_06
};

const RoomDetails = () => {
    const { roomId } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        // Replace this with your actual data fetching logic
        const fetchRoomDetails = async () => {
            // Dummy data, replace with actual fetch
            const rooms = [
                { id: 1, type: 'sgr', image: 'property-01.jpg', name: 'DELUXE VILLA', price: 3500, NumberOfRooms: 1, area: '15x15' },
                { id: 2, type: 'sgr', image: 'property-02.jpg', name: 'PREMIER DULUXE VILLA', price: 4000, NumberOfRooms: 1, area: '15x17' },
                { id: 3, type: 'sgr', image: 'property-03.jpg', name: 'POOL VILLA', price: 5000, NumberOfRooms: 1, area: '15x20' },
                { id: 4, type: 'dbr', image: 'property-04.jpg', name: 'DELUXE VILLA', price: 6000, NumberOfRooms: 2, area: '20x20' },
                { id: 5, type: 'dbr', image: 'property-05.jpg', name: 'PREMIER DELUXE VILLA', price: 6500, NumberOfRooms: 3, area: '25x25' },
                { id: 6, type: 'dbr', image: 'property-06.jpg', name: 'POOL VILLA', price: 7500, NumberOfRooms: 4, area: '30x30' }
            ];
            const roomDetails = rooms.find(room => room.id === parseInt(roomId));
            setRoom(roomDetails);
        };

        fetchRoomDetails();
    }, [roomId]);

    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="/" className="logo">
                                    <img src={Logo} alt="" />
                                </a>
                                <ul className="nav">
                                    <li><Link to="/" className="active">Home</Link></li>
                                    <li><Link to="/SearchRoom">Search Room</Link></li>
                                    <li><Link to="/Contact">Contact Us</Link></li>
                                    <li><Link to="/RoomDetails"><i className="fa fa-calendar"></i><span>Book Now</span></Link></li>
                                    <li><Link to='/Login'>Login</Link></li>
                                </ul>
                                <Link className='menu-trigger'>
                                    <span>Menu</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Room Details</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section properties">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item">
                                <img src={images[room.image]} alt={room.name} />
                                <h1>{room.name}</h1>
                                <p>Price: THB {room.price}</p>
                                <p>Number of rooms: {room.NumberOfRooms}</p>
                                <p>Area: {room.area}</p>
                                <p>Stay 2 Nights Extra Save 5%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>© 2018 www.baraliresort.com. All rights reserved. </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RoomDetails;
