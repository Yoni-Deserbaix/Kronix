import Button from "../components/Button";
import TitleDark from "../components/TitleDark";
import { capabilitiesButtons, capabilitiesCards } from "../data.json";

export default function Capabilities() {
  return (
    <div className="text-white">
      <TitleDark
        category="our capabilities"
        title="We can help you with..."
        className=""
      />
      <div className="flex flex-wrap justify-center gap-2 pt-12">
        {capabilitiesButtons.map((item) => (
          <Button
            key={item.name}
            className="h-[49.19px] px-10 text-sm"
            text={item.name}
          />
        ))}
      </div>
      <div className="mx-12 flex items-center justify-evenly gap-20 py-16 text-start">
        <div className="flex w-[606px] flex-col">
          <span className="text-sm font-light text-primary">BENEFITS</span>
          <h1 className="mt-4 text-5xl font-bold">
            The design subscription that connects you to your dream team{" "}
          </h1>
        </div>
        <div className="flex w-[536px] translate-y-20 flex-col pb-16">
          <p className="mt-4 text-xl font-extralight opacity-80">
            A subscription can alleviate the stress of staffing, managing
            expenses, or make design calls like a Creative Director. We partner
            with you to ensure that your design elevates your brand to new
            levels.
          </p>
          <Button text="See Pricing" className="mt-10 h-[56px] w-[149px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 py-14 text-start sm:grid-cols-2 lg:grid-cols-3">
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
