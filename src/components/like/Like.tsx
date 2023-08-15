import React from "react";
import "./index.css"
import like1 from "../../assets/like/like1.jpeg"
import like2 from "../../assets/like/like2.jpeg"
import like3 from "../../assets/like/like3.jpeg"
import like4 from "../../assets/like/like4.jpeg"
import like5 from "../../assets/like/like5.jpeg"

const Like: React.FC = () => {
    const LikeApi =
        [
            {
                img: like1,
                title: "We are stronger as a group than an individual"
            },
            {
                img: like2,
                title: "Every day, in every city and town across the country"
            },
            {
                img: like3,
                title: "I believe the world is one big family"
            },
            {
                img: like4,
                title: "A healthy outside starts from the inside"
            },
            {
                img: like5,
                title: "I have my own definition of minimalism"
            }
        ]

    return (
        <div className="like-wrap mg-l-r">
            <p className="tag">You might also like</p>

            <div className="like-wrap-content">
                {
                    LikeApi.map((el, index) => (
                        <div key={index} className="content-item">
                            <div className="global-img item-img">
                                <a href="">
                                    <img src={el.img} alt="" />
                                </a>
                            </div>

                            <h2 className="global-title item-title"><a href="">{el.title}</a></h2>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Like