export default function TextArea({ name = "", label = "", placeholder = "" }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} placeholder={placeholder}></textarea>
      </div>
    </>
  );
}
