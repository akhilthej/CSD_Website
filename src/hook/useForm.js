import React, { useState } from "react";

function useForm(props) {
  const [formData, setFormData] = useState(props);

  const setDynamicFormData = (name, value) => {
    setFormData({
      data: {
        ...formData.data,
        [name]: value,
      },
      error: { ...formData.error, ...validate(name, value) },
    });
  };

  const validate = (name, value) => {
    const error = {};
    if (!value) {
      error[name] = `${name} is required`;
    } else {
      error[name] = "";
    }
    return error;
  };

  const isValid =
    Object.keys(formData.error).length == Object.keys(formData.data).length &&
    Object.values(formData.error).every((d) => d == "");

  const clearForm = () => {
    setFormData(props);
  };

  return {
    formData,
    setDynamicFormData,
    clearForm,
    isValid,
  };
}

export default useForm;