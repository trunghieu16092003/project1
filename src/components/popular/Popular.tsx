import React from 'react'
import img1 from '../../assets/popular/img1.jpeg'
import img2 from '../../assets/popular/img2.jpeg'
import img3 from '../../assets/popular/img3.jpeg'
import img4 from '../../assets/popular/img4.jpeg'
import img5 from '../../assets/popular/img5.jpeg'
import img6 from '../../assets/popular/img6.jpg'
import img7 from '../../assets/popular/img7.jpeg'
import './index.css'
const Popular: React.FC =() => {
    const popularApi = {
        data: [
            {
                'nameImg': img1,
                'tag': "Idea"
            },
            {
                'nameImg': img2,
                'tag': "Lifestyle"
            },
            {
                'nameImg': img3,
                'tag': "Design"
            },
    
            {
                'nameImg': img4,
                'tag': "Health"
            },
    
            {
                'nameImg': img5,
                'tag': "Interior"
            },
    
            {
                'nameImg': img6,
                'tag': "Eco"
            },
    
            {
                'nameImg': img7,
                'tag': "Review"
            },
        ]
    }
    return <div className='popular mg-l-r'>
        <p className="tag">Popular Tags</p>
        <div className="popular-item">
            {
                popularApi.data.map((el, index) => (
                    <a key={index} className="item-detail global-img">
                        <h2>{el.tag}</h2>
                        <img src={el.nameImg} alt="" />
                    </a>
                ))
            }
        </div>
    </div>
}

export default Popular