type ChoicesProps = {
  name?: string;
  label?: string;
  choices?: string[];
};

export default function Choices({
  name = "",
  label = "",
  choices = [],
}: ChoicesProps) {
  const listItems = choices.map((choice, index) => (
    <label>
      <input type="radio" name={name} required={index === 0} />
      {choice}
    </label>
  ));

  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <div className="radio-group">{listItems}</div>
      </div>
    </>
  );
}
