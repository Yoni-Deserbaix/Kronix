export default function Testimonial() {
  return (
    <div className="pt-12 text-center text-background">
      <p className="text-lg font-normal">TESTIMONIAL</p>
      <h1 className="mx-auto w-[484px] text-5xl font-bold leading-tight">
        Customer is Our Top Priority
      </h1>
      <div className="pt-6">
        <p className="mx-auto w-[462px] text-center text-lg">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>
      <div className="my-12 flex justify-center">
        <div className="border-borderGray bg-bgGray flex h-[485px] w-[1000px] justify-between rounded-[40px] border shadow-md">
          <div className="flex flex-col items-start px-14 text-start text-background">
            <img
              src="./assets/testimonial.svg"
              alt="logo Gymstory"
              className="mt-20 h-[31px] w-[158px]"
            />
            <h1 className="mt-10 w-[495px] text-2xl font-extrabold capitalize">
              Kronix is the best digital agency i have ever seen! Highly
              Recommended!
            </h1>
            <p className="mt-4 w-[478px] text-xl opacity-80">
              I recently hired <span className="font-bold">Ideapeel</span> for a
              custom web development project and couldn't be happier with the
              results. The team was able to bring my unique ideas to life and
              create a website that truly stands out.
            </p>
            <p className="mt-8 text-xl font-extrabold">Diana Loreza</p>
            <p className="mt-1 opacity-80">
              Director of{" "}
              <span className="font-extrabold uppercase">Gymstory</span>
            </p>
          </div>
          <div>
            <p>....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
