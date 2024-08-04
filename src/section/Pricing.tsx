import Button from "../components/ui/Button";
import TitleDark from "../components/ui/TitleDark";
import { pricingCards } from "../data.json";

export default function Pricing() {
  return (
    <div>
      <TitleDark
        category="Clear & Simple Pricing"
        title="Simple pricing to level up your brand."
        description={`Senior experts. On-demand requests. Fast\n turnarounds. Flat monthly fee. Cancel anytime.`}
      />
      <div
        id="pricing"
        className="mt-4 flex flex-col items-center gap-8 py-12 md:mt-16 md:flex-row md:flex-wrap md:justify-center"
      >
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="mx-10 h-auto rounded-2xl border border-primary border-opacity-30 bg-transparent py-10 text-white md:mx-0 md:h-[864px] md:max-w-[360px]"
          >
            <div className="px-8">
              <div className="flex gap-3">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  {card.title}
                </h2>
                {card.badge && (
                  <Button
                    text={card.badge}
                    className={`text-md cursor-default px-4 py-2 font-[350] ${index === 1 && "bg-white"}`}
                  />
                )}
              </div>
              <p className="text-md mt-6 font-extralight opacity-80 md:text-sm">
                {card.description}
              </p>
            </div>
            <hr className="mx-auto my-6 h-[0.2px] w-[90%] border-0 bg-primary opacity-30" />
            <div className="px-8">
              <div className="my-4 text-4xl font-semibold text-primary md:text-5xl">
                {card.price}
              </div>
              <p className="text-md -mt-2 font-extralight opacity-80 md:text-sm">
                {card.note}
              </p>
            </div>
            <hr className="mx-auto mb-6 mt-8 h-[0.2px] w-[90%] border-0 bg-primary opacity-30" />
            <div className="px-8">
              <ul className="text:base my-10 space-y-4 font-light md:text-xl">
                {card.features.map((feature, featureIndex) => {
                  const words = feature.split(" ");
                  const primaryText = words.slice(0, 3).join(" ");
                  const remainingText = words.slice(3).join(" ");

                  return (
                    <li key={featureIndex} className="flex gap-5">
                      <img
                        src={card.star}
                        alt="star icon"
                        className="h-6 w-6"
                      />
                      <span>
                        {card === pricingCards[1] && featureIndex === 0 ? (
                          <>
                            <span className="font-[500] text-primary">
                              {primaryText}{" "}
                            </span>
                            <span className="text-white">{remainingText}</span>
                          </>
                        ) : (
                          <span className="text-white">{feature}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col md:gap-4">
                <Button
                  text="Book A Call"
                  className="mx-2 border border-primary bg-transparent py-4 font-[400] text-white"
                />
                <Button
                  text="Click to buy"
                  className="mx-2 mt-4 border border-bgCard bg-primary py-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
