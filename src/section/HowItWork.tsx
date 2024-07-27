import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";
import { designData } from "../data.json";
import "../index.css";
export default function HowItWorks() {
  return (
    <div className="pt-32 text-white">
      <div className="mx-12 flex items-center justify-evenly gap-20">
        <div className="flex w-[606px] flex-col">
          <span className="text-sm text-primary">HOW WE WORK</span>
          <h1 className="mt-4 text-5xl font-bold">
            Get a dedicated design team at a fraction of the cost.
          </h1>
        </div>
        <div className="flex w-[500px] translate-y-12 flex-col">
          <p className="mt-4 text-xl font-extralight opacity-80">
            Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as
            you need - no limits.
          </p>
          <Button text="See Pricing" className="mt-10 h-[56px] w-36 px-2" />
        </div>
      </div>
      <div className="mx-8 mt-52 flex items-start justify-center pb-52">
        {designData.map((item, index) => (
          <div key={index} className="flex-1 px-4">
            <div className="flex items-center justify-start">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <img src={item.src} alt={item.name} className="h-12 w-12 p-1" />
              </div>
              {index < 2 && (
                <div className="relative mb-4 mr-2 flex w-[75%] items-center">
                  <hr className="h-0.5 flex-1 border-0 bg-primary" />
                  <FaArrowRight className="absolute -right-2 text-primary" />
                </div>
              )}
            </div>
            <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
            <p className="mt-6 w-2/3 font-extralight opacity-80">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
