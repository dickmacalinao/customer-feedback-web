import React, { useState } from "react";

type SmileyRatingProps = {
  label: string;
  name: string;
  value?: number;
  onChange?: (value: number) => void;
  errors?: [];
};

const emojis = ["😡", "😕", "😐", "🙂", "😍"];

const SmileyRating: React.FC<SmileyRatingProps> = ({
  label,
  name,
  value = 0,
  onChange,
  errors = [],
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
        <p className="error-message">{error}</p>
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
              onClick={() => handleChange(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
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
