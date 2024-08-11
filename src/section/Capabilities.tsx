import FadeLeft from "../components/animations/FadeLeft";
import FadeOnScroll from "../components/animations/FadeOnScroll";
import FadeRight from "../components/animations/FadeRight";
import ElementPullUp from "../components/animations/magicui/element-pull-up";
import TextRevealByWord from "../components/animations/magicui/text-reveal";
import Button from "../components/ui/Button";
import TitleDark from "../components/ui/TitleDark";
import { capabilitiesButtons, capabilitiesCards } from "../data.json";

export default function Capabilities() {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;

  const AnimationComponentLeft = screenWidth < 768 ? FadeOnScroll : FadeLeft;
  const AnimationComponentRight = screenWidth < 768 ? FadeOnScroll : FadeRight;

  const elements = capabilitiesButtons.map((item, index) => (
    <Button
      key={index}
      className="cursor-default px-6 py-3 text-xs md:h-[49.19px] md:px-10 md:text-sm"
      text={item.name}
    />
  ));
  return (
    <div className="text-white" id="benefits">
      <TitleDark category="our capabilities" title="" />
      <div className="left-1/2 mx-auto flex justify-center text-center">
        <TextRevealByWord
          text="We can help you with..."
          className="mx-auto text-center"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2 pb-56">
        <ElementPullUp elements={elements} />
      </div>
      <div className="mx-12 flex flex-col items-center justify-evenly py-16 text-start md:flex-row md:gap-20">
        <AnimationComponentLeft>
          <div className="flex flex-col md:w-[606px]">
            <span className="text-sm font-light text-primary">BENEFITS</span>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              The design subscription that connects you to your dream team{" "}
            </h1>
          </div>
        </AnimationComponentLeft>
        <AnimationComponentRight>
          <div className="flex translate-y-8 flex-col md:w-[536px] md:translate-y-20 md:pb-16">
            <p className="mt-4 text-lg font-extralight opacity-80 md:text-xl">
              A subscription can alleviate the stress of staffing, managing
              expenses, or make design calls like a Creative Director. We
              partner with you to ensure that your design elevates your brand to
              new levels.
            </p>
            <Button text="See Pricing" className="mt-10 h-[56px] w-[149px]" />
          </div>
        </AnimationComponentRight>
      </div>
      <div
        className="mx-auto grid w-[85%] grid-cols-1 py-14 text-start sm:grid-cols-2 md:w-full lg:grid-cols-3"
        id="services"
      >
        {capabilitiesCards.map((card, index) => (
          <div
            className="border-1 border border-primary border-opacity-5 px-8 py-12"
            key={index}
          >
            <FadeOnScroll delay={index * 0.1}>
              <img
                src={card.image}
                className="mb-4 h-10 w-10"
                alt={card.title}
              />
              <h5 className="mb-4 pl-2 text-xl">{card.title}</h5>
              <p className="text-md font max-w-xs text-darkGray">
                {card.description}
              </p>
            </FadeOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
}
