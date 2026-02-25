import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import DetailsSections from "@/components/DetailsSections";
import Footer from "@/components/Footer";
import SectionTabs from "@/components/SectionTabs";

export default function Home() {
  return (
    <>
      <SectionTabs />
      <Hero />
      <Metrics />
      <Experience />
      <DetailsSections />
      <Footer />
    </>
  );
}