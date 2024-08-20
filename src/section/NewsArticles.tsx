import FadeOnScroll from "../components/animations/FadeOnScroll";
import { MagicCard } from "../components/animations/magicui/magic-card";
import TitleDark from "../components/ui/TitleDark";
import { NewsArticlesCards } from "../data.json";

export default function NewsArticles() {
  return (
    <div className="pb-28">
      <FadeOnScroll>
        <TitleDark
          category="blogs"
          title="News & Artciles"
          description="Best Articles to get started"
          descriptionStyles="-mt-2"
          className="mb-2 leading-tight tracking-tighter"
        />
      </FadeOnScroll>

      <div className="flex flex-wrap justify-center gap-7 pt-16 md:pt-28">
        {NewsArticlesCards.map((card, index) => (
          <MagicCard
            key={index}
            className="flex h-auto w-[85%] flex-col rounded-2xl border border-primary/30 bg-primary/[0.1%] text-white sm:w-[554px] sm:flex-row"
          >
            <img
              src={card.image}
              alt={card.category}
              className="h-40 w-full rounded-t-2xl object-cover sm:h-[212px] sm:w-[223px] sm:rounded-lg"
            />
            <div className="flex flex-col items-start p-4 sm:pl-4 sm:pt-8">
              <h3 className="text-sm font-light uppercase text-primary">
                {card.category}
              </h3>
              <h2 className="mt-2 text-xl font-semibold">{card.title}</h2>
              <p className="text-md mt-2 max-w-full font-extralight opacity-80 sm:max-w-[280px]">
                {card.description}
              </p>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
