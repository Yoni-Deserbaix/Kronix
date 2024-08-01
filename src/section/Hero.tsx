import Button from "../components/Button";
import "../index.css";

export default function Hero() {
  return (
    <div className="mt-20">
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
        <div className="glow absolute top-80 opacity-35"></div>
        {/* Stars background */}
        <div className="hidden md:flex">
          <div className="absolute right-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2 transform">
            <img src="/assets/Star.svg" alt="Star" className="h-28 w-28" />
          </div>
          <div className="absolute left-1/3 top-2/3 -translate-x-1/2 -translate-y-1/2 transform">
            <img src="/assets/Star.svg" alt="Star" className="h-4 w-4" />
          </div>
          <div className="absolute right-1/3 top-2/3 -translate-x-1/2 -translate-y-1/2 transform">
            <img src="/assets/Star.svg" alt="Star" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
