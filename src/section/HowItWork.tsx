import Button from "../components/Button";
import "../index.css";

export default function HowItWorks() {
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
        <div className="flex-1 px-4">
          <div className="flex items-center justify-start">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
              <img
                src="./assets/design/design01.svg"
                alt="Subscribe"
                className="h-12 w-12 p-1"
              />
            </div>
            <hr className="-ml-1 mb-2 h-0.5 w-3/4 border-0 bg-primary"></hr>
          </div>
          <h3 className="mt-6 text-xl font-semibold">
            Subscribe & get started
          </h3>
          <p className="mt-6 w-2/3 font-extralight opacity-80">
            Submit as many design tasks as you need without worrying about
            individual project fees.
          </p>
        </div>
        <div className="flex-1 px-4">
          <div className="flex items-center justify-start">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
              <img
                src="./assets/design/design02.svg"
                alt="Polished designs"
                className="h-12 w-12 p-1"
              />
            </div>
            <hr className="-ml-1 mb-2 h-0.5 w-3/4 border-0 bg-primary"></hr>
          </div>
          <h3 className="mt-6 text-xl font-semibold">
            Polished designs - on time
          </h3>
          <p className="mt-6 w-2/3 font-extralight opacity-80">
            Our designers get to work to deliver your request. Receive your
            design within a few days.
          </p>
        </div>
        <div className="flex-1 px-4">
          <div className="flex items-center justify-start">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
              <img
                src="./assets/design/design02.svg"
                alt="Polished designs"
                className="h-12 w-12 p-1"
              />
            </div>
            <hr className="-ml-1 mb-2 h-0.5 w-3/4 border-0 bg-primary"></hr>
          </div>
          <h3 className="mt-6 text-xl font-semibold">Revisions made simple</h3>
          <p className="mt-6 w-2/3 font-extralight opacity-80">
            Custom designs, prompt replies and as many revisions as you need.
          </p>
        </div>
      </div>
    </div>
  );
}
