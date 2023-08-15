import React from "react";
import logo from "../../assets/navigate/reiro.jpg"
import {BiSearchAlt2} from 'react-icons/bi'
import {BsThreeDots} from 'react-icons/bs'
import './index.css'

const Header: React.FC = () => {

    return <div className="navigate">
        <div className="logo">
            <a href=""><img src={logo} alt="" /></a>
        </div>
        <div className="menu">
            <ul>
                <li className="menu-item"><a href="">Demos</a></li>
                <li className="menu-item"><a href="">Style Guides</a></li>
                <li className="menu-item"><a href="">MemberShip</a></li>
                <li className="menu-item more">
                    <span><BsThreeDots /></span></li>
            </ul>
        </div>
        <div className="navigate-right">
            <div className="search menu-item">
            <BiSearchAlt2 />
            </div>
            <div className="menu-item">Sign in</div>
            <div className="btn menu-item"><a href="#">Become a subscriber</a></div>
        </div>
    </div>
}

export default Header