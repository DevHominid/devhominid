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

export default phoneMask;
