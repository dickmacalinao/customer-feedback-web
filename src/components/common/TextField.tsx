import React, { useState } from "react";

type TextFieldProps = {
  name: string | number | undefined;
  label: string;
  description?: string;
  value?: string;
  errors?: [];
  onChange?: (value: number | string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  name = "",
  label = "",
  description = "Enter a value",
  value,
  errors = [],
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const errorList = (
    <>
      {errors.map((error) => (
        <p className="error-message">{error}</p>
      ))}
    </>
  );

  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          id={name}
          placeholder={description}
          value={selectedValue}
          onChange={handleChange}
          className={errors.length > 0 ? "input error" : ""}
        />
        {errorList}
      </div>
    </>
  );
};

export default TextField;
