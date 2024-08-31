import FadeLeft from "../components/animations/FadeLeft";
import FadeOnScroll from "../components/animations/FadeOnScroll";
import FadeRight from "../components/animations/FadeRight";
import ElementPullUp from "../components/animations/magicui/element-pull-up";
import TextRevealByWord from "../components/animations/magicui/text-reveal";
import Button from "../components/ui/Button";
import FakeButton from "../components/ui/FakeButton";
import TitleDark from "../components/ui/TitleDark";
import { capabilitiesButtons, capabilitiesCards } from "../data.json";

export default function Capabilities() {
  const elements = capabilitiesButtons.map((item, index) => (
    <FakeButton
      key={index}
      className="px-6 py-3 text-xs hover:scale-105 md:h-[49.19px] md:px-10 md:text-sm"
      text={item.name}
    />
  ));

  return (
    <div className="pb-28 text-white" id="benefits">
      <TitleDark category="our capabilities" title="" />
      <div className="flex justify-center text-center">
        <TextRevealByWord
          text="We can help you with..."
          className="mx-auto text-center"
        />
      </div>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-2 pb-56 lg:w-2/3">
        <ElementPullUp elements={elements} />
      </div>
      <div className="mx-12 flex flex-col items-center justify-evenly overflow-hidden py-16 text-start lg:flex-row lg:gap-20">
        <FadeLeft>
          <div className="flex flex-col lg:w-[606px]">
            <span className="text-sm text-primary">BENEFITS</span>
            <h1 className="mt-4 text-3xl font-bold md:text-5xl">
              The design subscription that connects you to your dream team
            </h1>
          </div>
        </FadeLeft>
        <FadeRight>
          <div className="flex translate-y-8 flex-col md:pb-16 lg:max-w-[536px] lg:translate-y-20">
            <p className="mt-4 font-extralight opacity-80 md:text-xl">
              A subscription can alleviate the stress of staffing, managing
              expenses, or make design calls like a Creative Director. We
              partner with you to ensure that your design elevates your brand to
              new levels.
            </p>
            <a href="#pricing">
              <Button text="See Pricing" className="mt-10 h-[56px] w-[149px]" />
            </a>
          </div>
        </FadeRight>
      </div>
      <div
        className="mx-auto grid w-[85%] grid-cols-1 py-14 text-start sm:grid-cols-2 md:w-full lg:grid-cols-3"
        id="services"
      >
        {capabilitiesCards.map((card, index) => (
          <div
            className="border border-primary/5 px-8 py-12 transition-all hover:bg-bgCard/20"
            key={index}
          >
            <FadeOnScroll delay={index * 0.1}>
              <img src={card.image} className="mb-4 size-10" alt={card.title} />
              <h5 className="mb-4 pl-2 text-xl">{card.title}</h5>
              <p className="text-md max-w-xs text-darkGray">
                {card.description}
              </p>
            </FadeOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
}
