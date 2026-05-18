import Banner from "@/components/Banner";
import FeatureCards from "@/components/FeatureCards";
import PopularRooms from "@/components/PopularRooms";
import StudyNookStats from "@/components/StudyNookStats";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatureCards/>
      <StudyNookStats/>
      <PopularRooms/>
    </div>
  );
}
