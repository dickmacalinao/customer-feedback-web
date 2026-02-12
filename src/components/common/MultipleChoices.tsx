export default function MultipleChoices({ label = "", choices = [] }) {
  const listItems = choices.map((choice) => (
    <label>
      <input type="checkbox" />
      {choice}
    </label>
  ));
  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <div className="checkbox-group">{listItems}</div>
      </div>
    </>
  );
}
