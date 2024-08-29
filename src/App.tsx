import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import BeautifulWorks from "./section/BeautifulWorks";
import Brands from "./section/Brands";
import Capabilities from "./section/Capabilities";
import FAQ from "./section/FAQ";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Hero from "./section/Hero";
import HowItWorks from "./section/HowItWork";
import NewsArticles from "./section/NewsArticles";
import Pricing from "./section/Pricing";
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
      <div className="mx-auto max-w-7xl">
        <Pricing />
        <NewsArticles />
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <FAQ />
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
