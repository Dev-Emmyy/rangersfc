import FixturesSection from "./components/home/Fixtures";
import HeroSection from "./components/home/HeroSection";
import NewsSection from "./components/home/NewsSection";
import ScenesSection from "./components/home/ScenesSection";
import Partners from "./components/home/Partners";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewsSection />
      <FixturesSection />
      <ScenesSection />
      <Partners />
    </main>
  )
}