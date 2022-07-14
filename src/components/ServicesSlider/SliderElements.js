import styled from "styled-components";



export const SlideTextWrapper = styled.div`
    height: 100%;
    width: 40%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;
    z-index: 3;
    padding: 14px 40px;

    @media screen and (max-width: 960px) {
        width: 45%;
    }

    @media screen and (max-width: 680px) {
        width: 70%;
        margin-left: 15%;
        height: 70%;
        margin-top: 25%;
    }

    @media screen and (max-width: 420px) {
        width: 80%;
        margin-left: 10%;
        padding: 14px 14px;
        margin-top: 45%
    }

    
`;

export const SlideH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 0px;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    max-width: 300px;

    @media screen and (max-width: 680px){
        font-size: 26px;
        line-height: 30px;
    }
`;


export const SlideHr = styled.hr`
    width: 100px;
    border: 1px dashed #FFF;
    color: #fff;
    background-color: #fff;
    margin-top: 14px;
`;

export const SlideP = styled.p`
    font-size: 1.3rem;
    margin-top: 12px;
    text-align: left;
    text-shadow: 4px 0 4px rgb(0 0 0 / 35%);
    line-height: 2rem;
    max-width: 400px;

    @media screen and (max-width: 480px){
        font-size: 18px;
        line-height: 24px;
    }
`;