import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../components/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const headerList = [
    { name: "Process", id: "process" },
    { name: "Benefits", id: "benefits" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <div className="relative">
      <div className="mx-7 flex items-center justify-between rounded-3xl py-7 text-text">
        <div className="cursor-pointer text-xl">
          <p className="text-3xl font-bold">
            Kro<span className="text-primary">nix</span>
          </p>
        </div>
        <div className="hidden items-center gap-20 lg:flex">
          <ul className="flex flex-row gap-10 font-normal">
            {headerList.map((item, index) => (
              <a
                href={`#${item.id}`}
                key={index}
                className="cursor-pointer transition-all hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </ul>
          <Button text="Get Started" className="h-[56px] w-[160px]" />
        </div>
        {/* Menu Hamburger */}
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

      {/* Menu Mobile */}
      <div
        className={`top-18 fixed right-0 z-50 h-screen w-full bg-background text-2xl text-white transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4"></div>
        <ul className="mx-8 flex flex-col items-start gap-8 font-normal">
          {headerList.map((item, index) => (
            <a
              href={`#${item.id}`}
              key={index}
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
    </div>
  );
}
