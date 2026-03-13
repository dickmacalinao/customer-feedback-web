type HeaderProps = {
  header?: string;
};

export default function Header({ header = "Customer Feedback" }: HeaderProps) {
  return (
    <div className="header">
      <h1>{header}</h1>
    </div>
  );
}
