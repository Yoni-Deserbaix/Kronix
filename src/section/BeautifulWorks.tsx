export default function BeautifulWorks() {
  const images = [
    { src: "./assets/beautifulworks/edo.svg", alt: "Image 1" },
    { src: "./assets/beautifulworks/dfat.svg", alt: "Image 2" },
    { src: "./assets/beautifulworks/insights.svg", alt: "Image 3" },
    { src: "./assets/beautifulworks/oxfam.svg", alt: "Image 4" },
    { src: "./assets/beautifulworks/cvgt.svg", alt: "Image 5" },
    { src: "./assets/beautifulworks/dropbottle.svg", alt: "Image 6" },
    { src: "./assets/beautifulworks/map.svg", alt: "Image 7" },
    { src: "./assets/beautifulworks/unwrapped.svg", alt: "Image 8" },
    { src: "./assets/beautifulworks/RWH.svg", alt: "Image 9" },
    { src: "./assets/beautifulworks/bluegreen.svg", alt: "Image 10" },
    { src: "./assets/beautifulworks/welcomehome.svg", alt: "Image 11" },
    { src: "./assets/beautifulworks/ader.svg", alt: "Image 12" },
  ];
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
            {images.map((image, index) => (
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
