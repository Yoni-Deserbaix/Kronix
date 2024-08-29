import FadeOnScroll from "../components/animations/FadeOnScroll";
import Marquee from "../components/animations/magicui/marquee";
import TitleDark from "../components/ui/TitleDark";
import { cn } from "../lib/utils";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Kronix is the best digital agency I've worked with. Highly recommended for anyone seeking top-notch service!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "The service from Kronix was fantastic. They exceeded my expectations in every way.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Kronix's team is both creative and professional. I highly recommend them for any digital project.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm thrilled with the website Kronix delivered. Their attention to detail is unmatched.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Kronix went above and beyond to meet my needs. Their dedication truly shows in the final product.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Working with Kronix was a pleasure from start to finish. I can't recommend them enough!",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-primary/5 p-4 text-white hover:border-primary/20 hover:bg-bgCard/5",
      )}
    >
      <div className="flex h-12 flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="font-medium">{name}</figcaption>
          <p className="text-xs opacity-80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-start text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="pb-28 text-center">
      <FadeOnScroll>
        <TitleDark
          category="TESTIMONIAL"
          title={`Customer is Our Top \n Priority`}
          description={`We survey all of our clients, the results of which go directly \n to our CEO.`}
          descriptionStyles="opacity-100"
        />
      </FadeOnScroll>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
      </div>
    </div>
  );
}
