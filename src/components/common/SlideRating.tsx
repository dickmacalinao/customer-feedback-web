import React, { useState, useEffect } from "react";

type SlideRatingProps = {
  id: string;
  label: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  errors?: [];
  onChange?: (value: number) => void;
};

const SlideRating: React.FC<SlideRatingProps> = ({
  id,
  label,
  min = 1,
  max = 10,
  defaultValue = 5,
  value,
  errors = [],
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number>(
    value ?? defaultValue
  );

  useEffect(() => {
    if (onChange) {
      onChange(defaultValue);
    }
  }, [onChange, defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = Number(e.target.value);
    setSelectedValue(rating);

    if (onChange) {
      onChange(rating);
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
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      <div className="slider-container">
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          value={selectedValue}
          onChange={handleChange}
        />
      </div>

      <div className="rating-labels">
        <span>Poor</span>
        <span>Excellent</span>
      </div>
      {errorList}
    </div>
  );
};

export default SlideRating;
