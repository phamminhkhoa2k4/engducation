import FeedWrapper from "@/components/Wrapper/FeedWrapper";
import Header from "@/components/Wrapper/Header";
import StickyWrapper from "@/components/Wrapper/StickyWrapper";
import UserProgress from "@/components/Wrapper/UserProgress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
const Learn = async () => {

  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);


  if(!userProgress || !userProgress.activeCourse){
      redirect("/courses");
  }
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
