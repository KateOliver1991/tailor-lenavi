import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    background-color: transparent;
    background: linear-gradient(269.73deg, rgba(93, 92, 97, 0.68) 54.78%, rgba(176, 162, 149, 0.68) 99.8%);
    height: 100px;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    width: 100%;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 550px){
        height: 90px;
    }

`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100px;
    z-index: 1;
    padding: 0 24px;
    width: 90%;
   

`;

export const NavImg = styled.img`
    margin-top: -5px;
    width: 100%;

`;

export const NavLogo = styled(LinkR)`
    cursor: pointer;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-right: 55%;
    z-index: 7;


    ${NavImg}{
        width: 100%;
        object-fit: cover;
    }
    
    @media screen and (max-width: 768px) {
        margin-right: 35%;
    }

`;



export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        color: #fff;
        top: 0;
        right: 15px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    padding-right: 20px;

`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing; -0.02em;
    font-style; normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 80px;


    &:hover {
        text-shadow: 10px 10px 20px #bd8958;
        transition: 0.8s all ease;

    }

    &.active {
        text-shadow: 10px 10px 20px #bd8958;

    }

`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screenand (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkS)`
    border-radius: 0px;
    background: rgba(115, 149, 174, 0.5);
    white-space: nowrap;
    padding: 10px 22px;
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-size: 1rem;
    border: 2px solid #557A95;
    text-transform: uppercase;
    transition: background-color 500ms ease-in-out;
    text-decoration: none;

    &:hover {
        border-color: #998a7d;
        background-color: #b0a295;
        transition: background-color 500ms ease-in-out;
    }

`;