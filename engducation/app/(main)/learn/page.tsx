import FeedWrapper from "@/components/Wrapper/FeedWrapper";
import Header from "@/components/Wrapper/Header";
import StickyWrapper from "@/components/Wrapper/StickyWrapper";
import UserProgress from "@/components/Wrapper/UserProgress";

const Learn = () => {
  return (
    <div className="flex  flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Vietnamese", imageSrc: "/flags/VN.png" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Vietnamese" />
      </FeedWrapper>
    </div>
  );
};

export default Learn;
