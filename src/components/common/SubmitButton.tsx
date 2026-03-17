import React from "react";

export type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onSubmit?: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  disabled = false,
  loading = false,
  onSubmit,
}) => {
  return (
    <>
      <button
        type="button"
        className={`btn-submit ${
          !disabled ? "btn-submit-active" : "btn-submit-inactive"
        } ${loading ? "btn-submit-loading" : ""}`}
        disabled={disabled}
        onClick={onSubmit}
      >
        {loading ? <span className="spinner"></span> : label}
      </button>
    </>
  );
};

export default SubmitButton;
