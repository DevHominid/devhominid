import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    changeHandler: (nextValue) => {
      setValue(nextValue);
    }
  };
};

export default useInput;
