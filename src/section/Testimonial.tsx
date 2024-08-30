import FadeOnScroll from "../components/animations/FadeOnScroll";
import Marquee from "../components/animations/magicui/marquee";
import TitleDark from "../components/ui/TitleDark";
import { cn } from "../lib/utils";

const reviews = [
  {
    name: "Cindy Carmella",
    username: "@cindyCarmella",
    body: "Kronix provided an outstanding experience from start to finish. I highly recommend them to anyone!",
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1724952699~exp=1724956299~hmac=f0704aa73258f1aafd9bcdaa906c79525052c695de392b85573d5671d49f90aa&w=1380",
  },
  {
    name: "Soraya Ali",
    username: "@sorayaAli",
    body: "The service from Kronix was fantastic. They exceeded my expectations in every way.",
    img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John Sargis",
    username: "@johnSargis",
    body: "Kronix's team is both creative and professional. I highly recommend them for any digital project.",
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1614890107637-fe96d74acf4b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Johnson",
    username: "@michaelJ",
    body: "I'm thrilled with the website Kronix delivered. Their attention to detail is unmatched.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jenny Parker",
    username: "@jennyParker",
    body: "Kronix went above and beyond to meet my needs. Their dedication truly shows in the final product.",
    img: "https://plus.unsplash.com/premium_photo-1661778906556-82ec2021c533?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Brown",
    username: "@jamesBrown",
    body: "Working with Kronix was a pleasure from start to finish. I can't recommend them enough!",
    img: "https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <img className="size-8 rounded-full object-cover" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
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
      <div className="relative mt-16 flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
