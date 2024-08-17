import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import FadeOnScroll from "../components/animations/FadeOnScroll";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";

const footerLinks = [
  { href: "#process", text: "Process" },
  { href: "#benefits", text: "Benefits" },
  { href: "#services", text: "Services" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#faq", text: "FAQ" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: (
      <TiSocialFacebook
        size={20}
        className="cursor-pointer rounded-full bg-primary p-0.5 text-background transition-all hover:opacity-60"
      />
    ),
  },
  {
    href: "https://instagram.com",
    icon: (
      <FaInstagram
        size={20}
        className="cursor-pointer transition-all hover:opacity-60"
      />
    ),
  },
  {
    href: "https://linkedin.com",
    icon: (
      <FaLinkedinIn
        size={20}
        className="cursor-pointer transition-all hover:opacity-60"
      />
    ),
  },
  {
    href: "https://dribbble.com",
    icon: (
      <FaDribbble
        size={20}
        className="cursor-pointer transition-all hover:opacity-60"
      />
    ),
  },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [300, -100]);

  return (
    <div>
      <motion.div
        className="-z-50 -my-48 rounded-[2rem] bg-background text-center text-white"
        ref={containerRef}
        style={{ translateY }}
      >
        <div>
          <h1 className="mx-auto pt-16 text-4xl font-bold tracking-tighter md:text-7xl">
            Become part of the
            <br /> design revolution
          </h1>
          <div className="glow absolute left-1/2 z-10 opacity-20"></div>
          <p className="pt-4 md:pt-8 md:text-lg">
            Jump on a membership and start <br /> requesting designs right away!
          </p>
          <a href="#pricing" className="flex items-center">
            <Button
              text={
                <>
                  See Pricing <FaCircleArrowRight className="ml-3" />
                </>
              }
              className="mx-auto mt-12 h-14 w-[185px]"
            />
          </a>
        </div>
      </motion.div>
      <div className="mx-8 text-white">
        <div className="mt-72">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="flex-col">
              <Logo />
              <FadeOnScroll delay={0.2}>
                <p className="pt-8 font-light md:max-w-[311px]">
                  Kronix - the leading digital agency based in the UK, working
                  with top-tier clients, from start-ups to enterprises.
                </p>
              </FadeOnScroll>
            </div>
            <div className="flex flex-col gap-4 font-light">
              <FadeOnScroll delay={0.3}>
                <a
                  href="mailto:info@kronix.com"
                  className="flex items-center gap-4"
                >
                  <HiOutlineMail size={20} /> info@kronix.com
                </a>
              </FadeOnScroll>
              <FadeOnScroll delay={0.4}>
                <a
                  href="tel:(001) 1231 3435"
                  className="flex items-center gap-4"
                >
                  <HiOutlinePhone size={20} /> (001) 1231 3435
                </a>
              </FadeOnScroll>
              <FadeOnScroll delay={0.5}>
                <li className="flex items-center gap-5">
                  {socialLinks.map((social, index) => (
                    <a href={social.href} key={index}>
                      {social.icon}
                    </a>
                  ))}
                </li>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-20 h-px w-11/12 border-0 bg-[#404040] md:w-full" />
      <div className="mx-8 flex flex-col justify-between gap-10 py-8 font-light text-white md:flex-row">
        <div className="flex flex-wrap gap-5 md:gap-10">
          {footerLinks.map((link, index) => (
            <FadeOnScroll key={index} delay={index * 0.1}>
              <a
                href={link.href}
                className="transition-colors hover:text-gray-300"
              >
                {link.text}
              </a>
            </FadeOnScroll>
          ))}
        </div>
        <FadeOnScroll delay={0.6}>
          <a href="mailto:nazmulshanto1122@gmail.com">
            © 2023 shantogfx - All Right Reserved
          </a>
        </FadeOnScroll>
      </div>
    </div>
  );
}
