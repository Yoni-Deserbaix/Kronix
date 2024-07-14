import { worksImages } from "../data.json";

export default function BeautifulWorks() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-28 text-center">
        <h1 className="text-5xl font-extrabold tracking-tighter">
          Our Beautiful Works
        </h1>
        <div className="pt-6">
          <p className="text-lg text-background opacity-80">
            We help our clients grow their bottom-line with clear and
            professional websites.
          </p>
          {/* load more button (later) */}
        </div>
        <div className="w-full pt-20">
          <div className="grid grid-cols-4 gap-5">
            {worksImages.map((image, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? "-mb-20 mt-20" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
