import { NewsArticlesCards } from "../data.json";

export default function NewsArticles() {
  return (
    <div>
      <div className="space-y-4 pt-36 text-center text-white">
        <p className="text-lg font-normal uppercase text-primary">blogs</p>
        <h1 className="mx-auto max-w-[810px] text-5xl font-semibold leading-tight tracking-tighter">
          News & Articles
        </h1>
        <div>
          <p className="mx-auto w-11/12 max-w-[462px] text-center text-lg font-light">
            Best Articles to get started
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-7 py-28">
        {NewsArticlesCards.map((card, index) => (
          <div
            key={index}
            className="flex h-auto w-[85%] flex-col rounded-2xl border border-primary border-opacity-30 bg-primary bg-opacity-[1%] text-white sm:w-[554px] sm:flex-row"
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
          </div>
        ))}
      </div>
    </div>
  );
}
