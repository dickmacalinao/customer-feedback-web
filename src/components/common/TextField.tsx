export default function TextField({ name, label, description }) {
  return (
    <>
      <div className="form-group">
        <label for={name}>{label}</label>
        <input type="text" id={name} placeholder={description} required />
      </div>
    </>
  );
}
