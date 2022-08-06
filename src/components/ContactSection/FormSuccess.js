import React from 'react'
import { 
    ContactRightSide, 
    Righth1, 
    RightSideShade, 
    ImgSuccess,
    ImgContainer 
} from './FormElements'

const FormSuccess = () => {
  return (
    <ContactRightSide>
        <RightSideShade>
            <Righth1>Мы получили Вашу заявку. <br/> Мастер скоро свяжется с Вами.</Righth1>
            <ImgContainer>
                <ImgSuccess src={require('./assets/success.png')}/>
            </ImgContainer>
        </RightSideShade>
    </ContactRightSide>
  )
}

export default FormSuccess