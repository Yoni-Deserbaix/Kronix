import Button from "../components/Button";
import { pricingCards } from "../data.json";

export default function Pricing() {
  return (
    <div>
      <div className="pt-36 text-center text-white">
        <p className="text-lg font-normal uppercase text-primary">
          Clear & Simple Pricing
        </p>
        <h1 className="mx-auto max-w-[810px] text-5xl font-bold leading-tight">
          Simple pricing to level up your brand.
        </h1>
        <div className="pt-8">
          <p className="mx-auto w-11/12 max-w-[462px] text-center text-lg font-extralight opacity-80">
            Senior experts. On-demand requests. Fast turnarounds. Flat monthly
            fee. Cancel anytime.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-24 md:flex-row md:justify-center">
        {pricingCards.map((card) => (
          <div
            key={card.title}
            className="h-[844px] w-[360px] rounded-2xl border border-primary border-opacity-30 bg-transparent py-10 text-white"
          >
            <div className="px-8">
              <div className="flex gap-3.5">
                <h2 className="text-4xl font-semibold">{card.title}</h2>
                {card.badge && (
                  <Button
                    text={card.badge}
                    className="text-md px-4 py-2 font-[400]"
                  />
                )}
              </div>
              <p className="mt-6 text-sm font-extralight opacity-80">
                {card.description}
              </p>
            </div>
            <hr className="mx-auto my-6 h-[0.2px] w-[90%] border-0 bg-primary opacity-30" />
            <div className="px-8">
              <div className="my-4 text-5xl font-semibold text-primary">
                {card.price}
              </div>
              <p className="-mt-2 text-sm font-extralight opacity-80">
                {card.note}
              </p>
            </div>
            <hr className="mx-auto my-6 h-[0.2px] w-[90%] border-0 bg-primary opacity-30" />
            <div className="px-8">
              <ul className="my-10 space-y-4 text-xl font-light">
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-5">
                    <img src={card.star} alt="star icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                text="Book A Call"
                className="mx-2 border border-primary bg-transparent py-4 font-[400] text-white"
              />
              <Button
                text="Click to buy"
                className="mx-2 mt-5 border border-bgCard bg-primary py-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
