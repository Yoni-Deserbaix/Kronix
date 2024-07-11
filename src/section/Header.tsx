import Button from "../components/Button";

export default function Header() {
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
            <li className="cursor-pointer transition-all hover:text-gray-300">
              Process
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-300">
              Benefits
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-300">
              Services
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-300">
              Portfolio
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-300">
              FAQ
            </li>
          </ul>
          <Button text="Get Started" customStyles="px-10 py-4" />
        </div>
      </div>
    </div>
  );
}
