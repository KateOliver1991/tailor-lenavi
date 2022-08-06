import React, { useState } from 'react'
import ContactForm from './ContactForm'
import { 
    ContactContainer,
    ContactWrapper,
    ContactLeftSide,
    VideoBg
} from './FormElements'
import Video from '../../videos/mobile_bcg.mp4'
import FormSuccess from './FormSuccess'

const Form = () => {
  const [isSubmitted, setIsSubmitted]  = useState(false);

  function submitForm () {
    setIsSubmitted(true);
  }

  return (
    <ContactContainer id="contacts">
        <ContactWrapper>
            <ContactLeftSide>
                <VideoBg autoPlay loop muted src={ Video } type='video/mp4' />
            </ContactLeftSide>
            {!isSubmitted ? <ContactForm submitForm={submitForm}/>:<FormSuccess/>}
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Form