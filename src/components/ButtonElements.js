import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 0px;
    background: ${({primary}) => (primary ? 'rgba(115, 149, 174, 0.7)' : 'transparent')};
    transition: all 500ms ease-in-out;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 16px 36px;
    outline: none;
    border: 2px solid #557A95;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: all 500ms ease-in-out;
        border-color: ${({primary}) => (primary ? '#998a7d' : '#557a95')};
        background: ${({primary}) => (primary ? '#b0a295' : 'rgba(115, 149, 174, 0.5)')};
    }
`
