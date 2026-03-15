type HeaderProps = {
  header?: string;
};

export default function BreadCrumbHeader({ header = "Header" }: HeaderProps) {
  return (
    <div className="header">
      <h2>{header}</h2>
    </div>
  );
}
