import Hero from "../components/common/Hero";
import Stats from "../components/common/Stats";
import CalculatorSection from "../components/common/CalculatorSection";
import WhyChoose from "../components/common/WhyChoose";
import BlogSection from "../components/common/BlogSection";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CalculatorSection />
      <WhyChoose />
      <BlogSection />
    </>
  );
}

export default Home;