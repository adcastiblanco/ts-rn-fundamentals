import { useState } from "react";
export const useForm = <T extends Object>(formInputs: T) => {
  const [state, setState] = useState(formInputs);

  const handleChange = (value: string, name: keyof T) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return {
    state,
    handleChange,
  };
};
