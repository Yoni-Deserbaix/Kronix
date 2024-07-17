// pages/Capabilities.js
import Button from "../components/Button";
import { capabilitiesButtons } from "../data.json";

export default function Capabilities() {
  return (
    <div className="pt-12 text-center text-white">
      <p className="text-lg font-light text-primary">OUR CAPABILITIES</p>
      <h1 className="pt-4 text-5xl font-semibold">We can help you with...</h1>
      <div className="flex flex-wrap justify-center gap-2 pt-12">
        {capabilitiesButtons.map((item) => (
          <Button
            key={item.name}
            customStyles="px-10 py-3 text-sm"
            text={item.name}
          />
        ))}
      </div>
    </div>
  );
}
