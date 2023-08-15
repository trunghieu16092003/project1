import React from "react";
import p1 from "../../assets/previouspost/p1.jpeg"
import p2 from "../../assets/previouspost/p2.jpeg"
import p3 from "../../assets/previouspost/p3.jpeg"
import p4 from "../../assets/previouspost/p4.jpeg"
import p5 from "../../assets/previouspost/p5.jpeg"
import p6 from "../../assets/previouspost/p6.jpeg"
import "./index.css"

const PreviousPost: React.FC = () => {
    const previousApi = [
        {
            img: p1,
            tag: ["Lifestyle", "Eco", "Health"],
            mem: [],
            title: "We are stronger as a group than an individual",
            desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus",
            author: ["Damian Erdman"]
        },

        {
            img: p2,
            tag: ["Interior", "Lifestyle", "Design"],
            mem: [],
            title: "Every day, in every city and town across the country",
            desc: "Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus",
            author: ["Damian Erdman", ' Breana Flatley']
        },

        {
            img: p3,
            tag: ["Lifestyle", "Health"],
            mem: ["Paid-number"],
            title: "I believe the world is one big family",
            desc: "Integer nec mi cursus, blandit est et, auctor mauris. Aenean ex metus, faucibus in mattis at, tincidunt eu dolor. Cras",
            author: ["Damian Erdman"]
        },

        {
            img: p4,
            tag: ["Lifestyle", "Review"],
            mem: ["Members"],
            title: "We are stronger as a group than an individual",
            desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus",
            author: ["Damian Erdman"]
        },
        {
            img: p5,
            tag: ["Idea", "Design"],
            mem: [],
            title: "We are stronger as a group than an individual",
            desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus",
            author: ["Damian Erdman"]
        },
        {
            img: p6,
            tag: ["Health", "Interior", "Idea"],
            mem: [],
            title: "We are stronger as a group than an individual",
            desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus",
            author: ["Damian Erdman"]
        }
    ]
    return (
        <div className="previous mg-l-r">
            <p className="tag">previous posts</p>
            <div className="previous-content">
                {
                    previousApi.map((el, index) => (
                        <div key={index} className="item">

                            <div className="global-img item-img">
                                <a href=""><img src={el.img} alt="" /></a>
                            </div>
                            <div>
                                {
                                    el.mem.length !== 0 && el.mem.map((item, index) => (
                                        <span key={index} className="member global-tag">{item}</span>
                                    ))
                                }

                                {el.tag.map((item, index) => (
                                    <a key={index} href="" className="global-tag">{item}</a>
                                ))}
                            </div>

                            <h2 className="global-title previous-title"><a href="">{el.title}</a></h2>
                            <p className="global-desc">{el.desc}...</p>
                            <div className="author-name">
                                by {
                                    el.author.map((item, index) => (
                                        <a key={index} href="">{item}</a>
                                    ))
                                }

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default PreviousPost