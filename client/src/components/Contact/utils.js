const parseDigits = (string) => {
  const digits = string.match(/\d/g);

  return digits;
};

const applyDigitsToMask = (digits, mask) => {
  let result = mask;
  digits.forEach((digit, i) => {
    if (i === 3) {
      result = result.concat(`) ${digit}`);
    } else if (i === 6) {
      result = result.concat(`-${digit}`);
    } else {
      result = result.concat(digit);
    }
  });

  return result;
};

const phoneMask = (value, prevValue) => {
  const digits = parseDigits(value);
  const prevDigits = parseDigits(prevValue);

  if (!digits) {
    return '';
  }

  if (digits.length > 10) {
    return value.slice(0, -1);
  }

  if ((prevValue.length > value.length)
  && (prevDigits.length <= digits.length)) {
    digits.pop();
    if (digits.length === 0) {
      return '';
    }
  }

  let mask = '(';
  mask = applyDigitsToMask(digits, mask);

  for (let step = digits.length; step < 10; step += 1) {
    if (step === 3) {
      mask = mask.concat(') _');
    } else if (step === 6) {
      mask = mask.concat('-_');
    } else {
      mask = mask.concat('_');
    }
  }

  return mask;
};

const isEmailValidated = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isValidated = re.test(email);

  return isValidated;
};

const isPhoneValidated = (phone) => {
  const digits = parseDigits(phone);

  if (digits) {
    if (digits.length === 10) {
      return true;
    }
  }

  return false;
};

const isFormValidated = (formValues) => {
  const {
    email,
    message,
    messageType,
    name,
    phone
  } = formValues;

  if (!messageType || !name || !message || !isEmailValidated(email)) {
    return false;
  }

  if (phone) {
    if (!isPhoneValidated(phone)) {
      return false;
    }
  }

  return true;
};

const resetForm = (resetHandlers) => {
  Object.values(resetHandlers).forEach((resetHandler) => {
    resetHandler();
  });
};

const handleFormSubmit = (e, resetHandlers) => {
  e.preventDefault();

  resetForm(resetHandlers);
};

const handleFormValidation = (formValues, setValidationError) => (e) => {
  e.preventDefault();
  const { phone } = formValues;
  const missingInput = Object.keys(formValues).find((key) => !formValues[key]);

  if (missingInput) {
    setValidationError({
      name: missingInput,
      text: `${missingInput} is required`
    });
  }
  if (phone) {
    if (!isPhoneValidated(phone)) {
      setValidationError({
        name: 'phone',
        text: 'phone must be 10 digits'
      });
    }
  }
};

export {
  phoneMask,
  isEmailValidated,
  isFormValidated,
  isPhoneValidated,
  handleFormSubmit,
  handleFormValidation
};
