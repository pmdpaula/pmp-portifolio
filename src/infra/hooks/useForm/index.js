import { useState } from 'react';

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues(currentValues => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
  };
};

export default useForm;
