export default function Dropdown({
  name = "",
  label = "",
  options = [],
  nullable = true,
}) {
  const listOptions = options.map((option) => (
    <option value={option.id}>{option.value}</option>
  ));

  return (
    <>
      <div className="form-group">
        <label for={name}>{label}</label>
        <select id={name} required>
          {nullable && <option value="">Select rating</option>}
          {listOptions}
        </select>
      </div>
    </>
  );
}
