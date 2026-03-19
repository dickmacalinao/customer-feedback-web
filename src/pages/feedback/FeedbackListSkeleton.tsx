import Skeleton from "../../components/skeleton/Skeleton";
import TextAreaSkeleton from "../../components/skeleton/TextAreaSkeleton";
import SwitchSkeleton from "../../components/skeleton/SwitchSkeleton";
import SlideRatingSkeleton from "../../components/skeleton/SlideRatingSkeleton";
import SmileyRatingSkeleton from "../../components/skeleton/SmileyRatingSkeleton";

export default function FeedbackListSkeleton() {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Skeleton width="60%" height="25px" />
      </div>

      <SlideRatingSkeleton />
      <SwitchSkeleton />
      <SmileyRatingSkeleton />
      <TextAreaSkeleton />

      <div style={{ marginBottom: 20 }}>
        <Skeleton width="100%" height="50px" />
      </div>
    </>
  );
}
