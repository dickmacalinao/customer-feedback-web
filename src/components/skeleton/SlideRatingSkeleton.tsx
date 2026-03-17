import Skeleton from "./Skeleton";

export default function SlideRatingSkeleton() {
  return (
    <div className="question">
      <Skeleton width="80%" height="18px" />

      <div style={{ marginTop: 20 }}>
        <Skeleton width="100%" height="15px" />
        <div className="rating-labels" style={{ marginTop: 10 }}>
          <span>
            <Skeleton width="40px" height="15px" />
          </span>
          <span>
            <Skeleton width="80px" height="15px" />
          </span>
        </div>
      </div>
    </div>
  );
}
