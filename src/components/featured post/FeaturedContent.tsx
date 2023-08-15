import React from 'react'
import featured1 from "../../assets/featuredpost/featured1.jpeg"
import featured2 from "../../assets/featuredpost/featured2.jpeg"
import featured3 from "../../assets/featuredpost/featured3.jpeg"
import './style.css'


const FearturedContent: React.FC = () => {
    const featuredApi = {
        data: [
            {
                img: featured1,
                title: "AI can solve new problems very easily",
                author: "Daryl Wehner"
            },

            {
                img: featured2,
                title: "A healthy outside starts from the inside",
                author: "Daryl Wehner"
            },
            {
                img: featured3,
                title: "It's a new era in design, there a no rules",
                author: "Breana Flatley & Daryl Wehner"
            }
        ]
    }
    return (
        <div className='featured-content'>
            {
                featuredApi.data.map((el, index) => (
                    <div key={index} className="item">

                        <div className="featured-content-img">
                            <a href="">
                                <img src={el.img} alt="" />
                            </a>

                        </div>
                        <h2 className='global-title previous-title'><a href="">{el.title}</a></h2>
                        <span className="author-name">
                            <span>
                                by <a href="">{el.author}</a>
                            </span>

                        </span>
                    </div>

                ))
            }

        </div>
    )
}

export default FearturedContent