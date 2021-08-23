import {useState} from 'react';

const useControl = (initialValue, validFunc) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const onControlChange = ({ target: { value } }) => {
    setValue(value);
  }

  const onControlBlur = ()=> {
    setTouched(true);
  }

  const valid = (touched && validFunc(value)) ;

  return [
    value,
    valid,
    touched,
    onControlChange,
    onControlBlur,
  ]
};

export default useControl;