export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Пожалуйста, представьтесь';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.phone) {
      errors.phone = 'Как мы можем с Вами связаться?';
    } else if (values.phone.length < 12) {
      errors.comment = 'Пожалуйста, проверьте введеные данные';
    }

    if (!values.comment) {
      errors.comment = 'Пожалуйста, укажите причину обращения';
    } else if (values.comment.length < 5) {
      errors.comment = 'Пожалуйста, расскажите подробнее';
    }

    return errors;
  }