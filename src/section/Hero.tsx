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
        <img
          src="/assets/Star.svg"
          alt="star icon"
          className="absolute right-0 h-[150px] w-[150px] pb-12"
        />
        <p className="mt-12 max-w-[500px] font-normal opacity-80">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>
        <Button text="Book A Meeting" customStyles="mt-10 py-4 px-4" />
        <div className="glow absolute z-10 opacity-40"></div>
      </div>
    </div>
  );
}
