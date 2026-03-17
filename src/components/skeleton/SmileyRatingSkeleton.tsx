import Skeleton from "./Skeleton";

export default function SmileyRatingSkeleton() {
  return (
    <div className="question">
      <Skeleton width="45%" height="18px" />

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: 20,
        }}
      >
        <Skeleton width="30px" height="30px" borderRadius="50%" />
        <Skeleton width="30px" height="30px" borderRadius="50%" />
        <Skeleton width="30px" height="30px" borderRadius="50%" />
        <Skeleton width="30px" height="30px" borderRadius="50%" />
        <Skeleton width="30px" height="30px" borderRadius="50%" />
      </div>
    </div>
  );
}
