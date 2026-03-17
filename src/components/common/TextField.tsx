import React, { useState } from "react";

type TextFieldProps = {
  name: string | number | undefined;
  label: string;
  description?: string;
  value?: number | string | null | undefined;
  disabled?: boolean;
  errors?: string[];
  onChange?: (value: number | string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  name = "",
  label = "",
  description = "Enter a value",
  value,
  disabled = false,
  errors = [],
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const errorList = (
    <>
      {errors.map((error) => (
        <p key={error} className="error-message">
          {error}
        </p>
      ))}
    </>
  );

  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          id={name}
          placeholder={description}
          value={selectedValue}
          disabled={disabled}
          onChange={handleChange}
          className={errors.length > 0 ? "input error" : ""}
        />
        {errorList}
      </div>
    </>
  );
};

export default TextField;
