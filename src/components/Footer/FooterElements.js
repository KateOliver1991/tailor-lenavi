import styled from "styled-components";

export const FooterSection = styled.div`
    background-color: transparent;
    background: linear-gradient(269.73deg, rgba(93, 92, 97, 0.68) 54.78%, rgba(176, 162, 149, 0.68) 99.8%);
    height: 100px;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 1rem;
    padding: 10px;
    padding-right: 50px;
    position:sticky;
    width: 100%;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 550px){
        height: 140px;
        padding: 10px;
        margin-top: -140px;
    }

`;

export const FooterP = styled.p`
    font-size: 0.8rem;
    color: #fff;
    text-align:right;

    @media screen and (max-width: 550px){
        font-size: 1rem;
    }

`;
