import React, { useState } from "react";
import { type RatingProps } from "../../types/PropTypes";

const SlideRating: React.FC<RatingProps> = ({
  id,
  label,
  min = 1,
  max = 10,
  defaultValue = 5,
  onChange,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = Number(e.target.value);
    setValue(rating);

    if (onChange) {
      onChange(rating);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      <div className="slider-container">
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
      </div>

      <div className="rating-labels">
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </div>
  );
};

export default SlideRating;
