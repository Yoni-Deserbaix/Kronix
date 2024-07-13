import Button from "../components/Button";
import "../index.css";

export default function HowItWorks() {
  const designData = [
    {
      title: "Subscribe & get started",
      name: "Subscribe",
      src: "./assets/design/design01.svg",
      caption:
        "Submit as many design tasks as you need without worrying about individual project fees.",
    },
    {
      title: "Polished designs - on time",
      name: "Polished designs",
      src: "./assets/design/design02.svg",
      caption:
        "Our designers get to work to deliver your request. Receive your design within a few days.",
    },
    {
      title: "Revisions made simple",
      name: "Polished designs",
      src: "./assets/design/design03.svg",
      caption:
        "Custom designs, prompt replies and as many revisions as you need.",
    },
  ];

  return (
    <div className="pt-32 text-white">
      <div className="flex items-center justify-evenly gap-20">
        <div className="flex w-1/2 flex-col">
          <span className="text-sm text-primary">HOW WE WORK</span>
          <h1 className="mt-4 text-5xl font-bold">
            Get a dedicated design team at a fraction of the cost.
          </h1>
        </div>
        <div className="flex w-2/6 translate-y-20 flex-col">
          <p className="mt-4 text-xl font-extralight opacity-80">
            Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as
            you need - no limits.
          </p>
          <Button text="See Pricing" customStyles="px-2 py-4 w-36 mt-10" />
        </div>
      </div>
      <div className="mx-8 mt-52 flex items-start justify-center pb-52">
        {designData.map((item, index) => (
          <div key={index} className="flex-1 px-4">
            <div className="flex items-center justify-start">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <img src={item.src} alt={item.name} className="h-12 w-12 p-1" />
              </div>
              {index < 2 && (
                <hr className="-ml-1 mb-2 h-0.5 w-3/4 border-0 bg-primary"></hr>
              )}
            </div>
            <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
            <p className="mt-6 w-2/3 font-extralight opacity-80">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
