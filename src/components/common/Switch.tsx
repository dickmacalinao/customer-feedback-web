export default function Switch({ name = "", label = "" }) {
  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <div className="radio-group">
          <label>
            <input type="radio" name={name} required /> Yes
          </label>
          <label>
            <input type="radio" name={name} /> No
          </label>
        </div>
      </div>
    </>
  );
}
