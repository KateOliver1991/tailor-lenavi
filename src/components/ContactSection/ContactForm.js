import React from 'react'

import validate from './validateInfo.js';
import useForm from './useForm';

import {
    ContactRightSide,
    RightSideShade,
    Righth1,
    Undrline,
    FormDetails,
    FormInputs,
    FormLabel,
    FormInput,
    FormError,
    FormTextarea,
    FormInputSend,
    FormInputBtn
   

} from './FormElements';

const ContactForm = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    
   

  return (
    <ContactRightSide>
        <RightSideShade>
            <Righth1>
                Позвольте нам создать неповторимый образ для вас. <br/> Оставьте заявку, заполнив форму ниже.
            </Righth1>
            <Undrline/>
            <FormDetails onSubmit={handleSubmit} noValidate >
                <FormInputs>
                    <FormLabel>Ваши имя и фамилия</FormLabel>
                    <FormInput
                        type='text'
                        name='username'
                        placeholder='Введите имя и фамилию'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <FormError>{errors.username}</FormError>}
                </FormInputs>
                <FormInputs>
                    <FormLabel>Номер телефона</FormLabel>
                    <FormInput
                        type='phone'
                        name='phone'
                        placeholder='Введите номер телефона через +7'
                        value={values.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <FormError>{errors.phone}</FormError>}
                </FormInputs>
                <FormInputs>
                    <FormLabel>Комментарий к заказу</FormLabel>
                    <FormTextarea
                        rows={6}
                        name='comment'
                        placeholder='Пожалуйста, расскажите, какая услуга Вас интересует'
                        value={values.comment}
                        onChange={handleChange}
                    />
                    {errors.comment && <FormError>{errors.comment}</FormError>}
                </FormInputs>
                <FormInputSend>
                    Нажимая кнопку отправить Вы соглашаетесь с <a href='./assets/policy.pdf' download>политикой обработки персональных данных</a>
                </FormInputSend>
                <FormInputBtn type='submit'>
                    Отправить
                </FormInputBtn>
            </FormDetails>
        </RightSideShade>
    </ContactRightSide>
  )
}

export default ContactForm

