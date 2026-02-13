export default function TextField({ name = "", label = "", description = "" }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} placeholder={description} required />
      </div>
    </>
  );
}
