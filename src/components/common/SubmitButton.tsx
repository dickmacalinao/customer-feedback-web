import React from "react";

export type SubmitButtonProps = {
  label: string;
  onSubmit?: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onSubmit }) => {
  return (
    <>
      <button type="button" className="btn-submit" onClick={onSubmit}>
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
