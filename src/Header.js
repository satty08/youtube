import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom';
// import { Link } from 'react-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                            className="header__logo" 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                            alt=""
                        />
                </Link>
            </div>
            
            <div className="header__input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton" />  
                    </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar 
                    alt="Satyam"
                    src="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
                />
            </div>

        </div>
    )
}

export default Header
