import Button from "../components/Button";
import { capabilitiesButtons, capabilitiesCards } from "../data.json";

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
      <div className="flex items-center justify-evenly gap-20 py-16 text-start">
        <div className="flex w-1/2 flex-col">
          <span className="text-sm font-light text-primary">BENEFITS</span>
          <h1 className="mt-4 text-5xl font-bold">
            The design subscription that connects you to your dream team{" "}
          </h1>
        </div>
        <div className="flex w-2/6 translate-y-20 flex-col pb-16">
          <p className="mt-4 text-xl font-extralight opacity-80">
            A subscription can alleviate the stress of staffing, managing
            expenses, or make design calls like a Creative Director. We partner
            with you to ensure that your design elevates your brand to new
            levels.
          </p>
          <Button text="See Pricing" customStyles="px-2 py-4 w-36 mt-10" />
        </div>
      </div>
      <div className="grid grid-cols-1 text-start sm:grid-cols-2 lg:grid-cols-3">
        {capabilitiesCards.map((card) => (
          <div
            className="border-1 border border-primary border-opacity-5 px-8 py-12"
            key={card.title}
          >
            <img src={card.image} className="mb-4 h-10 w-10" alt={card.title} />
            <h5 className="mb-4 pl-2 text-xl">{card.title}</h5>
            <p className="text-md font max-w-xs text-darkGray">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
