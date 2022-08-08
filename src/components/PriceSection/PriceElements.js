import styled from "styled-components";
import PriceBg from "./assets/pricesbg.jpg";



export const PriceSectionContainer = styled.div`
    background-image: url(${PriceBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 817px;
   
    @media screen and (min-width: 1920px){
        height: 900px;
        padding-top: 0;
    }

    @media screen and (max-width: 1100px){
        height: 1100px;
        padding-top: 0;
    }


    @media screen and (max-width: 658px){
        height: 1500px;
    }
`;


export const SectionShade = styled.div`
    width: 100%;
    min-height: 817px;
    background: linear-gradient(152.02deg, rgba(142, 158, 167, 0.65) 20.5%, rgba(51, 58, 60, 0.65) 91.24%);
    z-index: 1;
    margin: 50px 0;
    padding: 150px 0;

    @media screen and (min-width: 1920px){
        min-height: 900px;
        padding-top: 0;

    }

    @media screen and (max-width: 1100px){
        min-height: 1100px;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 768px){
        min-height: 1100px;
        padding-top: 150px;
    }

    @media screen and (max-width: 658px){
        min-height: 1500px;
        padding-top: 150px;
    }
`;


export const PriceSectionContent = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    align-content: space-evenly;
    justify-content: center;
    grid-gap: 16px;


    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 768px){
        width: 650px;
        height: 95%;
    }

    @media screen and (max-width: 658px){
        grid-template-columns: 1fr;
        width: 70%;
        padding: 0 20px;
        grid-gap: 20px;
    }

    @media screen and (max-width: 420px){
        grid-template-columns: 1fr;
        width: 100%;
        padding: 0 20px;
        grid-gap: 16px;
    }


`;

export const PriceService = styled.div`
    border-radius: 26px 26px 26px 26px;
    background: #FFF;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 350px;

    @media screen and (min-width: 1920px) {
        width: 450px;
        height: 550px;
    }

    @media screen and (min-width: 1400px) {
        width: 350px;
        height:450px;
    }

    

`;

export const PriceSectionTitle = styled.div`
    width: 250px;
    height: 140px;
    display: flex;
    margin-bottom: 20px;
    
    border-radius: 26px 26px 0px 0px;

    @media screen and (min-width: 1920px) {
        width: 450px;
        height: 200px;
    }

    @media screen and (min-width: 1400px) {
        width: 350px;
        height: 200px;
    }
`;

export const PriceH3 = styled.h3`
    font-family: 'Oswald', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    letter-spacing; -0.02em;
    color: #FFF;
    height:100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 26px 26px 0px 0px;
    

`;

export const PriceItemWrapper = styled.div`
    padding: 0 20px;
    background: #fff;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 240px;
    border-radius: 26px 26px 26px 26px;

    @media screen and (min-width: 1920px) {
        width: 450px;
        height: 350px;
    }

    @media screen and (min-width: 1400px) {
        width: 350px;
        height: 300px;
        
    }
    
`;
export const ItemList =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 100%;
`

export const PriceItem = styled.li`
    font-size: 1rem;
    height: 40px;
    list-style: none;

    @media screen and (min-width: 1400px) {
        font-size: 1.3rem;
        padding: 0 10px;
    }
`;

export const ItemCost = styled.li`
    font-size: 1rem;
    height: 40px;
    list-style: none;

    @media screen and (min-width: 1400px) {
        font-size: 1.3rem;
        padding: 0 10px;
    }
`;