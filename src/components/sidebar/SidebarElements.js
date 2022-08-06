import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 95%;
    background-color: #938E94;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' :  '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcone = styled(FaTimes)`
    color: #fff;

`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    text-aling: center;

    @media screen and (max-width: 768px){
        grid-template-rows: repeat(6, 50px); 
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing; -0.02em;
    font-style; normal;
    font-weight: 400;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #b0a295;
        transition: background-color 500ms ease-in-out;
    }

    &.active {
        background-color: #b0a295;
    }
`; 

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const SidebarRoute = styled(LinkS)`
    background: rgba(115, 149, 174, 0.5);
    white-space: nowrap;
    padding: 16px 32px;
    color: #fff;
    font-size: 16px;
    border: 2px solid #557A95;
    text-transform: uppercase;
    transition: background-color 500ms ease-in;
    text-decoration: none;

    &:hover {
        border-color: #998a7d;
        background-color: #b0a295;
        transition: background-color 500ms ease-in;
    }
`;