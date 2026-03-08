import React, { useState } from "react";

type SwitchProps = {
  name: string;
  label: string;
  defaultValue?: number | string;
  value?: number | string;
  onChange?: (value: number | string) => void;
};

const Switch: React.FC<SwitchProps> = ({
  name,
  label = "",
  defaultValue,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <>
      <div className="form-group">
        <label>
          {label}-{value}
        </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name={name}
              value="yes"
              checked={selectedValue === "yes"}
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
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>
    </>
  );
};

export default Switch;
