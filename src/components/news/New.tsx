import React from "react";
import mainNew from "../../assets/news/new1.jpeg"
import author1 from "../../assets/author/author1.jpg"
import author2 from "../../assets/author/author2.jpg"
import SidebarRightNew from "./SidebarRightNew";
import './new.css'

const New: React.FC = () => {
    return (
        <div className="new-wrap mg-l-r">
            <div className="new-wrap-left">
                <p className="tag">What's new?</p>
                <div className="new-main">
                    <div className="new-main-img">
                        <a href="">
                            <img src={mainNew} alt="" />
                        </a>
                    </div>
                    <div className="new-main-content">
                        <div className="content-tags">
                            <a className="global-tag" href="">Lifestyle</a><a className="global-tag" href="">Eco</a><a className="global-tag" href="">Health</a>
                        </div>
                        <h2 className="global-title news-title">
                            <a href="">The trick to getting more done is to have the freedom to roam around</a>
                        </h2>
                        <p className="desc">Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et,
                            lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.</p>
                        <div className="author">
                            <div className="author-meta">
                                <div className="author-meta-img">
                                    <a href="">
                                        <img src={author1} alt="" />
                                    </a>
                                </div>

                                <div className="author-meta-img">
                                    <a href="">
                                        <img src={author2} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="author-content">
                                <div className="author-name">
                                    by <a href="">Breana Flatley</a> & <a href="">Damian Erdman</a>
                                </div>
                                <div className="time"><span>October 7, 2022 .</span> 4 min read</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="new-wrap-right">
                <div className="subscribe-form">
                    <h2 className="tag">Newsletter</h2>
                    <h3 className="subscribe-form-title">Get all the latest posts delivered straight to your inbox.</h3>
                    <div className="subscribe-form-main">
                        <input type="text" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <SidebarRightNew />
            </div>
        </div>)
}

export default New