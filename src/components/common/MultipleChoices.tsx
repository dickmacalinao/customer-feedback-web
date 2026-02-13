type MultipleChoicesProps = {
  name?: string;
  label?: string;
  choices?: string[];
};

export default function MultipleChoices({
  name = "",
  label = "",
  choices = [],
}: MultipleChoicesProps) {
  const listItems = choices.map((choice) => (
    <label>
      <input type="checkbox" />
      {choice}
    </label>
  ));
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="checkbox-group">{listItems}</div>
      </div>
    </>
  );
}
