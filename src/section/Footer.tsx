import {
  FaCircleArrowRight,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import Button from "../components/Button";

export default function Footer() {
  return (
    <div>
      <div className="-my-48 rounded-[2rem] bg-background text-center text-white">
        <div className="">
          <h1 className="mx-auto pt-16 text-4xl font-bold tracking-tighter md:text-7xl">
            Become part of the
            <br /> design revolution
          </h1>
          <div className="glow absolute left-1/2 z-10 opacity-20"></div>
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
      </div>
      <div className="mx-8 text-white">
        <div className="mt-72">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="flex-col">
              <h2 className="text-3xl font-bold">
                Kro<span className="text-primary">nix</span>
              </h2>
              <p className="max-w-[311px] pt-8 font-light">
                Kornix - the leading digital agency based in the UK, working
                with top-tier clients, from start-ups to enterprises.
              </p>
            </div>
            <div className="flex flex-col gap-4 font-light">
              <li className="flex items-center gap-4">
                <HiOutlineMail size={20} /> info@kronix.com
              </li>
              <li className="flex items-center gap-4">
                <HiOutlinePhone size={20} />
                (001) 1231 3435
              </li>
              <li className="flex items-center gap-5">
                <TiSocialFacebook
                  size={20}
                  className="rounded-full bg-primary p-0.5 text-background"
                />
                <FaInstagram size={20} />
                <FaLinkedinIn size={20} />
                <FaDribbble size={20} />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
