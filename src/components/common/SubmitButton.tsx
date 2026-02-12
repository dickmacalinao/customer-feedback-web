export default function SubmitButton({ label = "" }) {
  return (
    <>
      <button type="submit" className="btn-submit">
        {label}
      </button>
    </>
  );
}
