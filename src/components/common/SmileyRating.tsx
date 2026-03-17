import React, { useState } from "react";

type SmileyRatingProps = {
  label: string;
  name: string;
  value?: number | string | null | undefined;
  disabled?: boolean;
  errors?: string[];
  onChange?: (value: number) => void;
};

const emojis = ["😡", "😕", "😐", "🙂", "😍"];

const SmileyRating: React.FC<SmileyRatingProps> = ({
  label,
  name,
  value = 0,
  disabled = false,
  errors = [],
  onChange,
}) => {
  const [hover, setHover] = useState<number | null>(null);

  const handleChange = (rating: number) => {
    if (onChange) {
      onChange(rating);
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
    <div className="smiley-rating">
      <label className="rating-label">{label}</label>

      <div id={name} className="smiley-container">
        {emojis.map((emoji, index) => {
          const ratingValue = index + 1;

          return (
            <span
              key={ratingValue}
              className={`smiley ${
                ratingValue <= (hover ?? value) ? "active" : ""
              }`}
              onClick={() => !disabled && handleChange(ratingValue)}
              onMouseEnter={() => !disabled && setHover(ratingValue)}
              onMouseLeave={() => !disabled && setHover(null)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      {errorList}
    </div>
  );
};

export default SmileyRating;
