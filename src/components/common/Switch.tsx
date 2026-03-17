import React, { useState } from "react";

type SwitchProps = {
  name: string;
  label: string;
  defaultValue?: number | string;
  value?: number | string | null | undefined;
  disabled?: boolean;
  errors?: string[];
  onChange?: (value: number | string) => void;
};

const Switch: React.FC<SwitchProps> = ({
  name,
  label = "",
  defaultValue,
  value,
  disabled = false,
  errors = [],
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue);

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
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name={name}
              value="yes"
              checked={selectedValue === "yes"}
              disabled={disabled}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name={name}
              value="no"
              checked={selectedValue === "no"}
              disabled={disabled}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {errorList}
      </div>
    </>
  );
};

export default Switch;
