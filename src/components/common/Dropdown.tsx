type Item = {
  id: number;
  value: string;
};

type DropdownProps = {
  name?: string;
  label?: string;
  options?: Item[];
  nullable?: boolean;
};

export default function Dropdown({
  name = "",
  label = "",
  options = [],
  nullable = true,
}: DropdownProps) {
  const listOptions = options.map((option) => (
    <option value={option.id}>{option.value}</option>
  ));

  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select id={name} required>
          {nullable && <option value="">Select rating</option>}
          {listOptions}
        </select>
      </div>
    </>
  );
}
