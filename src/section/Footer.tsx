import { FaCircleArrowRight } from "react-icons/fa6";
import Button from "../components/Button";

export default function Footer() {
  return (
    <div className="-my-48 rounded-[2rem] bg-background text-center text-white">
      <div className="">
        <h1 className="mx-auto pt-16 text-4xl font-bold tracking-tighter md:text-7xl">
          Become part of the
          <br /> design revolution
        </h1>
        <p className="pt-4 md:pt-8 md:text-lg">
          Jump on a membership and start <br /> requesting designs right away!
        </p>
        <Button
          text={
            <>
              See Pricing <FaCircleArrowRight className="ml-3" />
            </>
          }
          className="mx-auto mt-12 h-14 w-[185px]"
        />
      </div>
      <div className="pt-28"></div>
    </div>
  );
}
