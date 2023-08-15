import React from "react";
import FearturedContent from "./FeaturedContent";
import "./index.css"
import { BsArrowRight } from 'react-icons/bs'

const FeaturedPost: React.FC = () => {
    return (
        <div className="featured-wrap mg-l-r">
            <p className="tag">
                Feartured posts
            </p>
            <div className="featured-main">
                <p className="featured-subtitle">Editor's Choice</p>
                <h2 className="featured-title">
                    Get started with our best stories
                </h2>
                <FearturedContent />
                <div className="featured-btn-wrap">
                    <a href="">See all featured post <BsArrowRight /></a>
                </div>
            </div>


        </div>
    )
}

export default FeaturedPost