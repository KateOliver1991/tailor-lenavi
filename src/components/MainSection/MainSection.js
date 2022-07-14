import React from 'react';
import Video from '../../videos/main_bcg.mp4';
import { Button } from '../ButtonElements';
import { 
    MainContainer, 
    MainBg, 
    VideoBg, 
    MainContent, 
    MainImg, 
    MainLogo,
    MainP,
    MainBtnWrap
} from './MainSectionElements';

const MainSection = () => {
  return (
    <MainContainer id="main">
        <MainBg>
            <VideoBg autoPlay loop muted src={ Video } type='video/mp4' />
        </MainBg>
        <MainContent>
            <MainLogo>
                <MainImg src={require('./assets/main_logo.png')} alt='Company logo'/>
            </MainLogo>
            <MainP>Каждый день на страже вашего стиля</MainP>
            <MainBtnWrap>
                <Button to ='gallery'>Посмотреть</Button>
            </MainBtnWrap>
            <MainBtnWrap>
                <Button to ='contacts' 
                primary="true">
                    Записаться</Button>
            </MainBtnWrap>
        </MainContent>
    </MainContainer>
  )
}

export default MainSection