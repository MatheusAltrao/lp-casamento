import ActionsButtons from "./components/sections/actions-buttons";
import { CarouselImages } from "./components/sections/carousel-images";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import HeroSection from "./components/sections/hero-section";
import { OurStory } from "./components/sections/our-story";
import { WhereWhen } from "./components/sections/where-when";

export default function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OurStory />
      <ActionsButtons />
      <CarouselImages />
      <WhereWhen />
      {/*  <MessageForm /> */}
      <Footer />
    </main>
  );
}
