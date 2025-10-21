import { Hero } from "@/components/features/home/components/hero-section";
import PropertiesPage from "@/components/features/projects/FeaturedProperties";

const page = () => {
  return (
    <>
      <Hero
        backgroundSrc="AdobeStock_1340126777_1_with_bgc_vgggsn"
        backgroundType="image"
      />
      <div className="pt-24">
        <PropertiesPage />
      </div>
    </>
  );
};

export default page;
