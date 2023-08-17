import React from "react";
import * as Styles from "./style"

interface ISidebarRightProps {
    name: string,
    onClick: () => void,
    isSelected: boolean,
}

const SidebarRight: React.FC<ISidebarRightProps> = ({ name, onClick, isSelected }) => {
    return (
        <Styles.ListStyled onClick={onClick} isSelected={isSelected}> {name}</Styles.ListStyled>
    )
}

export default SidebarRight

