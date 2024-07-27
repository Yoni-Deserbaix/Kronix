export default function Testimonial() {
  return (
    <div className="py-20 text-center text-background">
      <p className="text-lg font-normal">TESTIMONIAL</p>
      <h1 className="mx-auto w-11/12 max-w-[484px] text-5xl font-bold leading-tight">
        Customer is Our Top Priority
      </h1>
      <div className="pt-6">
        <p className="mx-auto w-11/12 max-w-[462px] text-center text-lg">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>
      <div className="my-12 mb-36 flex justify-center px-4">
        <div className="flex h-auto w-full max-w-[1000px] flex-col justify-between rounded-[40px] border border-borderGray bg-bgGray shadow-md lg:h-[485px] lg:flex-row">
          <div className="flex flex-col items-start p-8 text-start text-background md:px-14">
            <img
              src="./assets/testimonial.svg"
              alt="logo Gymstory"
              className="mt-8 h-[31px] w-[158px]"
            />
            <h1 className="mt-6 w-full max-w-[495px] text-2xl font-extrabold capitalize lg:mt-10">
              Kronix is the best digital agency I have ever seen! Highly
              Recommended!
            </h1>
            <p className="mt-4 w-full max-w-[478px] text-xl opacity-80">
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
          <div className="flex items-center justify-center p-8 lg:pr-16">
            <img
              src="./assets/testimonial_pp.png"
              alt="Picture of the Director of Gymstory "
              className="w-full max-w-[200px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
