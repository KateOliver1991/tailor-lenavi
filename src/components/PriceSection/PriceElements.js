import styled from "styled-components";
import PriceBg from "./assets/pricesbg.jpg";



export const PriceSectionContainer = styled.div`
    background-image: url(${PriceBg});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100vh;
    min-height: 817px;
    position: relative;
    z-index:1;
    
    @media screen and (max-width: 450px){
        height: 100vh;
    }
`;

export const PriceSectionContent = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    background: linear-gradient(152.02deg, rgba(142, 158, 167, 0.65) 20.5%, rgba(51, 58, 60, 0.65) 91.24%);
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    padding-bottom: 200px;

`;

export const PriceService = styled.div`
    border-radius: 26px 26px 0px 0px;
    background: #FFF;
    justify-content: center;
    align-items: center;

`;

export const PriceSectionTitle = styled.div`
    width: 300px;
    height: 180px;
    display: flex;
    
    border-radius: 26px 26px 0px 0px;
`;

export const PriceH3 = styled.h3`
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
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
    padding: 20px;
    background: #fff;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 320px;
    border-radius: 0px 0px 26px 26px;
    
`;
export const ItemList =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
`

export const PriceItem = styled.li`
    font-size: 18px;
    height: 40px;
    list-style: none;
`;

export const ItemCost = styled.li`
    font-size: 18px;
    height: 40px;
    list-style: none;
`;