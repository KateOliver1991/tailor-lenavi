import styled from 'styled-components';
import Background from './assets/main_bcg.jpg'

export const ReviewContainer = styled.div`
    min-height: 917px;
    width: 100%;
    position: relative;
    display: flex;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;

`;

export const ReviewContent = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(152.02deg, rgba(142, 158, 167, 0.65) 20.5%, rgba(51, 58, 60, 0.65) 91.24%); 
`;

export const ReviewSecTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #FFF;
    text-transform: uppercase;
`;

export const Underline = styled.hr`
    border: 1px solid #FFF;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;

export const ReviewBox = styled.div`
    background: #FFF;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    text-align: center;
    width: 30%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width:1100px) {
        width: 50%;
        height: 60%;
    }

    @media screen and (max-width:680px) {
        width: 60%;
        height: 70%;
    }

    @media screen and (max-width:580px) {
        width: 90%;
        height: 70%;

    }

    @media screen and (max-width:480px) {
        width: 90%;
        height: 70%;

    }

`;

export const ImgContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.2rem;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background:  #557A95;
        position: absolute;
        top: -0.25rem;
        right: -0.5rem;
        border-radius: 50%;
    }

    @media screen and (max-width:580px) {
        margin-bottom: 1rem;

    }
`;

export const PersonImg = styled.img`
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
`;

export const QuoteIcon = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: #557A95;
    color: #FFF;
`;

export const ReviewAuthor = styled.h4`
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    font-style: bold;
    font-weight: 600;

    @media screen and (max-width:580px) {
        font-size: 1.2rem;
        margin-bittom: 0.15rem;

    }
`;

export const ReviewText = styled.p`
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    font-weight: 400;

    @media screen and (max-width:580px) {
        text-align: left;
        font-size: 1.1rem;
    }
`;

export const ReviewBtnContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const PrevBtn = styled.button`
    color: #557A95;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover{
        color:#B0A295;
        transition: all 500ms ease-out;
    }
`;

export const NextBtn = styled.button`
    color: #557A95;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover{
        color:#B0A295;
        transition: all 500ms ease-out;
    }
`;