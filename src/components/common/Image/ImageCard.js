import React from "react";
import './ImageCard.scss'

const ImageCard = (props) => {
    const { src } = props;
    return (
        <div className="image-card">
            <img src={src}/>
        </div>
    )
}

export default ImageCard;