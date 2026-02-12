export default function TextArea({ name, label, placeholder }) {
  return (
    <>
      <div className="form-group">
        <label for={name}>{label}</label>
        <textarea id={name} placeholder={placeholder}></textarea>
      </div>
    </>
  );
}
