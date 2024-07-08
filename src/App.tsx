import Header from "./section/Header";
import Hero from "./section/Hero";

export default function App() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="h-[100vh]">
          <Hero />
        </div>
      </div>
    </div>
  );
}
