import { FaArrowRight } from "react-icons/fa";
import FadeLeft from "../components/animations/FadeLeft";
import FadeRight from "../components/animations/FadeRight";
import Button from "../components/ui/Button";
import { designData } from "../data.json";
import "../index.css";
export default function HowItWorks() {
  return (
    <div className="pt-32 text-white" id="process">
      <div className="mx-12 flex flex-col items-center justify-evenly md:flex-row md:gap-20">
        <FadeLeft>
          <div className="flex flex-col md:w-[606px]">
            <span className="text-sm text-primary">HOW WE WORK</span>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Get a dedicated design team at a fraction of the cost.
            </h1>
          </div>
        </FadeLeft>
        <FadeRight>
          <div className="flex translate-y-6 flex-col md:w-[500px]">
            <p className="mt-4 text-lg font-extralight opacity-80 md:text-xl">
              Grow your brand with high-quality design for a flat monthly fee.
              Work with senior designers. Subscribe and make as many requests as
              you need - no limits.
            </p>
            <a href="#pricing">
              <Button text="See Pricing" className="mt-10 h-[56px] w-36 px-2" />
            </a>
          </div>
        </FadeRight>
      </div>
      <div className="mx-8 mt-36 flex flex-col items-start justify-center pb-52 md:mt-52 md:flex-row">
        {designData.map((item, index) => (
          <div key={index} className="flex-1 px-4">
            <div className="flex items-center justify-start">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary md:mb-4 lg:size-20">
                <img
                  src={item.src}
                  alt={item.name}
                  className="p-1 lg:size-12"
                />
              </div>
              {index < 2 && (
                <div className="relative mb-4 mr-2 flex w-[75%] items-center">
                  <hr className="hidden h-0.5 flex-1 border-0 bg-primary md:flex" />
                  <FaArrowRight className="absolute -right-2 hidden text-primary md:flex" />
                </div>
              )}
            </div>
            <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
            <p className="mb-8 w-2/3 font-extralight opacity-80 md:my-6">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
