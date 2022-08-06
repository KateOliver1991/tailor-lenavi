import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    phone: '',
    comment: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    const TOKEN = "5434963078:AAGqQdqG3N3AodTllfc3j98zHQLINyK0RgU";
    const CHAT_ID = "-657034426";
    const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель:</b> ${ values.username }\n`;
    message += `<b>Телефон:</b> ${ values.phone }\n`;
    message += `<b>Комментарий:</b> ${ values.comment }\n`;
 
    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    
    

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [callback, isSubmitting, errors]
  );
  
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;