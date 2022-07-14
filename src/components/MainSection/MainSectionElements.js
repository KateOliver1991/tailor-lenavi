import styled from "styled-components";


export const MainContainer = styled.div`
    background: linear-gradient(180deg, #F4E3C6 0%, #E6D7B3 100%);
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
    

    /* Add :befoe styles*/
`;

export const MainBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #938E94;

`;

export const MainContent = styled.div`
    background: linear-gradient(180deg, rgba(93, 92, 97, 0.44), rgba(93, 92, 97, 0.44));
    width: 40%;
    height: 100%;
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 950px){
        width: 60%;
    }
    
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;

export const MainImg = styled.img`
    width: 100%;
    

`;

export const MainLogo = styled.div`
    cursor: pointer;
    width: 60%;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-top: 32px;

    ${MainImg}{
        width: 100%;
    }

    @media screen and (max-width: 550px){
        width: 100%
    }

`;

export const MainP = styled.p`
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.045em;
    margin-top: 40px;
    margin-bottom: 25px;

    @media screen and (max-width: 440px){
        font-size: 18px;

    }
`;

export const MainBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;

`;