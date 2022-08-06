import styled from "styled-components";
import Map from './assets/map.png'

export const ContactContainer = styled.div`
    position: absolute;
    background: linear-gradient(180deg, #F4E3C6 0%, #E6D7B3 100%);
    padding: 0;
    width: 100%;
    height: 100vh;
    min-height: 917px;
    top: 0;
    position:relative;
    
    @media screen and (max-width: 550px){
        min-height: 1000px;
    }

    @media screen and (max-width: 480px){
        min-height: 1100px;
    }
    
`;

export const ContactWrapper = styled.div`
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    display: flex;
`;

export const ContactLeftSide = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 40%;
    height:100%;
    overflow: hidden;

    @media screen and (max-width: 880px){
        width: 30%;
    }

    @media screen and (max-width: 880px){
        display: none;
    }
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #938E94;

`;

export const ContactRightSide = styled.div`
    width: 60%;
    height:100%;
    background-image:url(${Map}); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    float: right;
    margin-left: 40%;

    @media screen and (max-width: 880px){
        width:100%;
        margin-left:0;
    }
    
`;

export const ContactRightSideS = styled.div`
    width: 60%;
    height:100%;
    background-image:url(${Map}); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    float: right;
    margin-left: 40%;

    @media screen and (max-width: 880px){
        width:100%;
        margin-left:0;
    }
    
`;

export const RightSideShade = styled.div`
    width: 100%;
    height:100%;
    background: linear-gradient(152.02deg, rgba(142, 158, 167, 0.65) 20.5%, rgba(51, 58, 60, 0.65) 91.24%);
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RightSideShadeSuccess = styled.div`
    width: 100%;
    height:100%;
    background: linear-gradient(152.02deg, rgba(142, 158, 167, 0.65) 20.5%, rgba(51, 58, 60, 0.65) 91.24%);
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;


export const Righth1 = styled.h1`
    font-size: 1.4rem;
    text-align: start;
    width: 60%;
    margin-bottom: 1rem;
    color: #FFF;
    text-align: center;
    text-shadow: 1px 1px 2px #7395AE;

    @media screen and (max-width: 1300px){
        width: 70%;

    }

    @media screen and (max-width: 480px){
        font-size: 1.6rem;
        width: 90%;

    }
`;

export const Undrline = styled.hr`
    border: 2px solid #FFF;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
`;

export const FormDetails = styled.form`
    background: #fff;
    border-radius: 20px;
    width: 40%;
    max-width: 450px;
    height: 60%;
    max-height: 580px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    @media screen and (max-width: 1300px){
        width: 60%;
        height: 60%;
    }

    @media screen and (max-width: 950px){
        width: 70%;
        height: 60%;
    }

    @media screen and (max-width: 550px){
        width: 90%;
        height: 55%;
    }
`;

export const FormInputs = styled.div`
    margin-bottom: 0.5rem;
    width: 100%;
`;

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 6px;
    color: #302F32;
`;

export const FormInput = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: 1px solid #E6D7B3;
`;

export const FormError = styled.p`
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
`;

export const FormTextarea = styled.textarea`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    width: 100%;
    border: 1px solid #E6D7B3;
`;

export const FormInputSend = styled.span`
    font-size: 0.8rem;
    margin: 10px;
    color: #302F32;
    width: 80%;
    text-align: center;
`;

export const FormInputBtn = styled.button`
    border-radius: 0px;
    background: ${'rgba(115, 149, 174, 0.7)'};
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
`;

export const ImgSuccess = styled.img`
    width: 100%;
`;


export const ImgContainer = styled.div`
    display: inline-block;
    width: 90%;
    margin-top: 150px;
    margin-bottom: 96px;
    
    @media screen and (max-width: 550px) {
        margin-bottom: 136px;
        
    }

    ${ImgSuccess}{
        width: 100%;
        object-position: left bottom;
    }

   
`;

