import { styled } from "styled-components"

interface IListStyledProps {
    isSelected: boolean;
}

export const ListStyled = styled.div<IListStyledProps>`
    list-style-type: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    padding: 15px 30px;
    &:hover {
        background-color: #f6f6f6;
    }

    background-color: ${props => props.isSelected ? "#f6f6f6" : ""}
`