import React, { useState } from "react";

type TextAreaProps = {
  name: string | number | undefined;
  label: string;
  description?: string;
  value?: string;
  disabled?: boolean;
  errors?: [];
  onChange?: (value: number | string) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  name = "",
  label = "",
  description = "Enter your message.",
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
        <textarea
          id={name}
          placeholder={description}
          value={selectedValue}
          disabled={disabled}
          onChange={handleChange}
          className={errors.length > 0 ? "input error" : ""}
        ></textarea>
        {errorList}
      </div>
    </>
  );
};

export default TextArea;
