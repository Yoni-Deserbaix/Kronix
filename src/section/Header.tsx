export default function Header() {
  return (
    <div className="flex items-center justify-between rounded-3xl  text-text py-7">
      <div className="cursor-pointer  text-xl">
        <p className="font-bold text-3xl">
          Kro<span className="text-primary">nix</span>
        </p>
      </div>
      <ul className="flex flex-row gap-16 font-normal max-md:hidden">
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
    </div>
  );
}
