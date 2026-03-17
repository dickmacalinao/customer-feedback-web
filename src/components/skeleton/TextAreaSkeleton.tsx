import Skeleton from "./Skeleton";

export default function TextAreaSkeleton() {
  return (
    <div className="question">
      <Skeleton width="80%" height="18px" />

      <div style={{ marginTop: 20 }}>
        <Skeleton width="100%" height="100px" />
      </div>
    </div>
  );
}
