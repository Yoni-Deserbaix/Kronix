import Button from "../components/Button";

export default function Header() {
  const headerList = [
    { name: "Process" },
    { name: "Benefits" },
    { name: "Services" },
    { name: "Portfolio" },
    { name: "FAQ" },
  ];

  return (
    <div>
      <div className="mx-7 flex items-center justify-between rounded-3xl py-7 text-text">
        <div className="cursor-pointer text-xl">
          <p className="text-3xl font-bold">
            Kro<span className="text-primary">nix</span>
          </p>
        </div>
        <div className="flex items-center gap-20">
          <ul className="flex flex-row gap-10 font-normal max-md:hidden">
            {headerList.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition-all hover:text-gray-300"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <Button text="Get Started" customStyles="w-[160px] h-[56px]" />
        </div>
      </div>
    </div>
  );
}
