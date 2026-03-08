import React, { useState } from "react";

type TextFieldProps = {
  name: string | number | undefined;
  label: string;
  description?: string;
  value?: string;
  required?: boolean;
  onChange?: (value: number | string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  name = "",
  label = "",
  description = "Enter a value",
  value,
  required = false,
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

  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          id={name}
          placeholder={description}
          required={required}
          value={selectedValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default TextField;
