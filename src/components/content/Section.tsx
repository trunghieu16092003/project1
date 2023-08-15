import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import "./index.css"
import img1 from '../../assets/popular/img1.jpeg'
import img2 from '../../assets/popular/img2.jpeg'
import img3 from '../../assets/popular/img3.jpeg'
import img4 from '../../assets/popular/img4.jpeg'
import img5 from '../../assets/popular/img5.jpeg'
import img6 from '../../assets/popular/img6.jpeg'
import img7 from "../../assets/popular/img7.jpeg"

const Section: React.FC = () => {
  return (
    <div className='section-wrap'>
        <h1 className="section-title">
            <span>Hey, we’re Reiro.</span> We promote positive culture through <span>inspiring articles</span>  on health, design, and web.
        </h1>
        <div className="section-search">
            <input type="text" placeholder='Search post, tags and author' />
            <div className="section-search-icon">
                <BiSearchAlt2 />
            </div>
        </div>
    </div>
  )
}

export default Section