import StarBackground from "../components/animations/StarBackground";
import Button from "../components/ui/Button";
import "../index.css";

export default function Hero() {
  return (
    <div className="relative mt-20">
      <div className="z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="z-10 text-5xl font-bold md:text-8xl md:leading-[7rem]">
          Bringing Your <br />
          Dream Into <span className="font-jarkarta text-primary">Reality</span>
        </h1>
        <p className="mt-8 w-3/4 font-[250] opacity-80 md:mt-12 md:max-w-[500px]">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>
        <Button text="Book A Meeting" className="mt-10 h-[56px] w-[149px]" />

        {/* Glow effect background */}
        <div className="glow absolute opacity-35"></div>

        {/* Stars background */}
        <StarBackground />
      </div>
    </div>
  );
}
