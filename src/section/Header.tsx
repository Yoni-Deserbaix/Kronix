import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import FadeDown from "../components/animations/FadeDown";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";

interface HeaderItem {
  name: string;
  id: string;
}

const headerList: HeaderItem[] = [
  { name: "Process", id: "process" },
  { name: "Benefits", id: "benefits" },
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "FAQ", id: "faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <FadeDown>
        <div className="mx-7 flex items-center justify-between rounded-3xl py-7 text-text">
          <Logo />
          <div className="hidden items-center gap-20 lg:flex">
            <ul className="flex flex-row gap-10 font-normal">
              {headerList.map((item) => (
                <a
                  href={`#${item.id}`}
                  key={item.id}
                  className="cursor-pointer transition-all hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </ul>
            <Button text="Get Started" className="h-[56px] w-[160px]" />
          </div>
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <AiOutlineClose size={30} className="text-text" />
              ) : (
                <AiOutlineMenu size={30} className="text-text" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`top-18 fixed right-0 z-50 h-screen w-full bg-background text-2xl text-white transition-transform lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <AiOutlineClose size={30} className="text-text" />
            </button>
          </div>
          <ul className="mx-8 flex flex-col items-start gap-8 font-normal">
            {headerList.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                className="w-full cursor-pointer underline underline-offset-8 transition-all hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              text="Get Started"
              className="h-[56px] w-full text-base font-extralight"
            />
          </ul>
        </div>
      </FadeDown>
    </div>
  );
}
