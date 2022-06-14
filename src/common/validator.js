const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginValidators = {
  email: email => {
    if (email === '') {
      return 'E-mail is required';
    }

    if (!EMAIL_PATTERN.test(email)) {
      return 'E-mail is invalid';
    }
  },

  password: password => {
    if (password === '') {
      return 'Password is required';
    }
    if (password.length < 7) {
      return 'Password is weak';
    }
  }
};

export const createEventValidators = {
  desc: desc => {
    if (desc === '') {
      return 'Description is required';
    }
  },
  name: name => {
    if (name === '') {
      return 'Event name is required';
    }
  },
  endDate: endDate => {
    if (endDate === '') {
      return 'Date is required';
    }
  },
  startDate: endDate => {
    if (endDate === '') {
      return 'Date is required';
    }
  },
  image: uploadeImage => {
    if (!uploadeImage) {
      return 'Upload an image';
    }
  }
};

export const validateForm = (formData, formValidation) => {
  const dataKeys = Object.keys(formData);
  const errors = {};
  let isValid = true;
  for (let i = 0; i < dataKeys.length; i++) {
    const dataKey = dataKeys[i];
    const error = formValidation[dataKey](formData[dataKey]);
    errors[dataKey] = error;
    if (error) {
      isValid = false;
    }
  }

  return { isValid, errors };
};
