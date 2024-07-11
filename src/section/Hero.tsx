import Button from "../components/Button";
import "../index.css";

export default function Hero() {
  return (
    <div className="mt-20">
      <div className="z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-8xl font-bold leading-[7rem]">
          Bringing Your <br />
          Dream Into <span className="italic text-primary">Reality</span>
        </h1>
        <p className="mt-12 max-w-[500px] font-normal opacity-80">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>
        <Button text="Book A Meeting" customStyles="mt-10 py-4 px-4" />

        {/* Glow effect background */}
        <div className="glow absolute z-10 opacity-40"></div>
        {/* Stars background */}
        <div>
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
