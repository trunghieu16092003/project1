import React from 'react'
import logo from '../../assets/navigate/reiro.jpg'
import {BsArrowRight} from 'react-icons/bs'
import "./index.css"

const Footer: React.FC = () => {
    return (
        <div className='footer-wrap mg-l-r'>
            <div className="footer-content">
                <div className="footer-logo-wrap">
                    <div className="logo">
                        <a href=""><img src={logo} alt="" /></a>     
                    </div>
                    <p className="desc">A minimal, functional theme for running a paid-membership publication on Ghost</p>
                </div>

                <div className="footer-subscribe">
                        <a href="">Become a subscribe <BsArrowRight /></a>
                    <p className="desc">Get all the latest posts delivered straight to your inbox.</p>
                </div>
            </div>
            <div className="footer-nav">
                <div className="footer-nav-item">
                    <p className='title'>Social</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Kichstarter</a></li>
                        <li><a href="">Vimeo</a></li>
                    </ul>
                </div>
                <div className="footer-nav-item">
                    <p className='title'>Social</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Kichstarter</a></li>
                        <li><a href="">Vimeo</a></li>
                    </ul>
                </div>
                <div className="footer-nav-item">
                    <p className='title'>Social</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Kichstarter</a></li>
                        <li><a href="">Vimeo</a></li>
                    </ul>
                </div>
                <div className="footer-nav-item">
                    <p className='title'>Social</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Kichstarter</a></li>
                        <li><a href="">Vimeo</a></li>
                    </ul>
                </div>
                <div className="footer-nav-item">
                    <p className='title'>Social</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Kichstarter</a></li>
                        <li><a href="">Vimeo</a></li>
                    </ul>
                </div>
                <div className="footer-nav-item">
                    <p className='title'>Social</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Kichstarter</a></li>
                        <li><a href="">Vimeo</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer