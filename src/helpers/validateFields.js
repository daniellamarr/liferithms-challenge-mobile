const validateFields = (fields) => {
  let message = '',
    status = true,
    errorField = '';
  fields = fields.reverse();
  fields.map((field) => {
    if (!field.value) {
      errorField = field.name;
      message = `${field.name} is required`;
      status = false;
    }
  });
  return {
    errorField,
    message,
    status,
  };
};

export default validateFields;
