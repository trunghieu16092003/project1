import React from "react";
import new2 from "../../assets/news/new2.jpeg"
import new3 from "../../assets/news/new3.jpeg"
import "./style.css"

const SidebarRightNew: React.FC = () => {
    const newListApi = {
        data: [
            {
                img: new2,
                tag: ["Idea", "App"],
                title: "AI can solve new problems very easily",
                author: "Daryl Wehner"
            }, 
            {
                img: new3,
                tag: ["Idea", "Design"],
                title: "There are still many questions left to answer",
                author: " Damian Erdman"
            }
        ]
    }
    return <div className="new-list">
        {
            newListApi.data.map((el, index) => (
                <div key={index} className="new-list-item">
                    <a className="global-img" href="">
                        <img src={el.img} alt="" />
                    </a>
                    <div>
                        {
                            el.tag.map((tag, index) => (
                                <a key={index} className="global-tag" href="">{tag}</a>
                            ))
                        }
                    </div>
                    <h2 className="global-title"><a href="">{el.title}</a></h2>
                    <div className="author-name">
                        by <a>{el.author}</a>
                    </div>
                </div>
            ))
        }
        
    </div>
}

export default SidebarRightNew