import Button from "../components/Button";
import "../index.css"; // Assurez-vous que votre CSS est bien importé

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
    </div>
  );
}
