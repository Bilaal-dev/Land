import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import LetterOfIntent from "./_components/LetterOfIntent";
import History from "./_components/History";
import Manifesto from "./_components/Manifesto";
import Mission from "./_components/Mission";
import TheBridge from "./_components/TheBridge";
import Vote from "./_components/Vote";
import Footer from "./_components/Footer";
import Video from "./_components/Video";
import Carousel from "./_components/Carousel";

export default function Home() {
  return (
    <main className="pt-16 overflow-x-hidden overflow-y-hidden">
      <Nav />
      <Hero />
      <Carousel/>
      <LetterOfIntent />
      <Video />
      <History />
      <Manifesto />
      <div className="bg-gray-50">
        <div className="relative">
          {/* Decorative diagonal line */}
          <div className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-green-700 to-purple-700 opacity-10" />
          <div className="relative z-10">
            <Mission />
            <TheBridge />
            {/* <Vote /> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
