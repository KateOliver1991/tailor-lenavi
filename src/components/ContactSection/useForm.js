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

    const contactFormData = new FormData();
    contactFormData.append("Имя", values.username)
    contactFormData.append("Телефон", values.phone)
    contactFormData.append("Комментарий", values.comment)

    axios({
      method: 'post',
      url: 'https://v1.nocodeapi.com/katecarter1991/telegram/qDmUfmrZVyVdMuXB', 
      params: {},
      data: contactFormData,
      headers: {'Content-Type': 'multipart/form-data' }
    }).then(function (response) {
      // handle success
      
      console.log(response.data);
    }).catch(function (errors) {
      // handle error
    
      console.log(errors);
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