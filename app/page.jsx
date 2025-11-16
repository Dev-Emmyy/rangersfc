import FixturesSection from "./components/home/Fixtures";
import HeroSection from "./components/home/HeroSection";
import NewsSection from "./components/home/NewsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewsSection />
      <FixturesSection />
    </main>
  )
}