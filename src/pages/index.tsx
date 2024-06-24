import FAQSection from "../sections/FAQSection";
import HomeSection from "../sections/HomeSection";
import ProcessSection from "../sections/ProcessSection";
import ProductSection from "../sections/ProductSection";
import TeamSection from "../sections/TeamSection";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="bg-black">
      <HomeSection />
      <TeamSection />
      <ProcessSection />
      <ProductSection />
      <FAQSection />
    </div>
  );
};

export default Home;
