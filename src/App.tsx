import BeautifulWorks from "./section/BeautifulWorks";
import Brands from "./section/Brands";
import Capabilities from "./section/Capabilities";
import Header from "./section/Header";
import Hero from "./section/Hero";
import HowItWorks from "./section/HowItWork";
import Testimonial from "./section/Testimonial";

export default function App() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl">
        <Header />
        <div>
          <Hero />
          <Brands />
          <HowItWorks />
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <BeautifulWorks />
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <Capabilities />
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
