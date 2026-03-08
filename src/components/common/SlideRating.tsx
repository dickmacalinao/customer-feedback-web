import React, { useState } from "react";

type SlideRatingProps = {
  id: string;
  label: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const SlideRating: React.FC<SlideRatingProps> = ({
  id,
  label,
  min = 1,
  max = 10,
  defaultValue = 5,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number>(
    value ?? defaultValue
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = Number(e.target.value);
    setSelectedValue(rating);

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
          value={selectedValue}
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
