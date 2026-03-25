type TypeBadgeProps = {
  type: string;
};

export default function QuestionTypeBadge({ type }: TypeBadgeProps) {
  const typeDisplay =
    type === "text"
      ? "Text Field"
      : type === "textarea"
      ? "Text Area"
      : type === "yesNo"
      ? "Yes / No"
      : type === "slidingRate"
      ? "Sliding Rate"
      : type === "smileyRate"
      ? "Smiley Rate"
      : "";
  return <>{typeDisplay}</>;
}
