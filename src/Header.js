import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className="header">
            <MenuIcon />
            <img
                className="header__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt=""
            />
            <input type="text"/>
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar 
                alt="Satyam"
                src="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
            />
        </div>
    )
}

export default Header
