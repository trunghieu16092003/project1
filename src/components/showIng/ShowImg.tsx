import React from "react"
import * as Styles from "./style"

interface IShowImgProps {
    imgUrl: string
}

const ShowImg: React.FC<IShowImgProps> = ({imgUrl}) => {
    return (
        <Styles.ImgItem className="img-item">
            <Styles.Item src={imgUrl} alt="" />
        </Styles.ImgItem>
    )
}

export default ShowImg