import React from 'react'
import { 
    ContactRightSideS, 
    Righth1, 
    RightSideShadeSuccess, 
    ImgSuccess,
    ImgContainer 
} from './FormElements'

const FormSuccess = () => {
  return (
    <ContactRightSideS>
        <RightSideShadeSuccess>
            <Righth1>Мы получили Вашу заявку. <br/> Мастер скоро свяжется с Вами.</Righth1>
            <ImgContainer>
                <ImgSuccess src={require('./assets/success.png')}/>
            </ImgContainer>
        </RightSideShadeSuccess>
    </ContactRightSideS>
  )
}

export default FormSuccess