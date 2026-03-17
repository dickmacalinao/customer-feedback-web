import Skeleton from "./Skeleton";

export default function SwitchSkeleton() {
  return (
    <div className="question">
      <Skeleton width="80%" height="18px" />

      <div
        style={{
          display: "flex",
          gap: "5px",
          marginTop: 20,
        }}
      >
        <Skeleton width="15px" height="15px" borderRadius="50%" />
        <Skeleton width="40px" height="15px" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          marginTop: 10,
        }}
      >
        <Skeleton width="15px" height="15px" borderRadius="50%" />
        <Skeleton width="30px" height="15px" />
      </div>
    </div>
  );
}
