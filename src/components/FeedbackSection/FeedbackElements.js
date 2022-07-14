import styled from "styled-components";
import Background from "./assets/main_bcg.jpg"

export const FeedbackContainer = styled.div`
    height: 817px;
    width: 100%;
    position: absolute;
    display: flex;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const FeedbackSlider = styled.div`
    width: 60%;
    height: 400px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;