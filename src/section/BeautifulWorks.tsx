export default function BeautifulWorks() {
  const images = [
    { src: "./assets/beautifulworks/edo.svg", alt: "Edo Logo" },
    { src: "./assets/beautifulworks/dfat.svg", alt: "DFAT Logo" },
    { src: "./assets/beautifulworks/insights.svg", alt: "Insights Logo" },
    { src: "./assets/beautifulworks/oxfam.svg", alt: "Oxfam Logo" },
    { src: "./assets/beautifulworks/cvgt.svg", alt: "CVGT Logo" },
    { src: "./assets/beautifulworks/dropbottle.svg", alt: "Dropbottle Logo" },
    { src: "./assets/beautifulworks/map.svg", alt: "Map Logo" },
    { src: "./assets/beautifulworks/unwrapped.svg", alt: "Unwrapped Logo" },
    { src: "./assets/beautifulworks/RWH.svg", alt: "RWH Logo" },
    { src: "./assets/beautifulworks/bluegreen.svg", alt: "Bluegreen Logo" },
    {
      src: "./assets/beautifulworks/welcomehome.svg",
      alt: "Welcome Home Logo",
    },
    { src: "./assets/beautifulworks/ader.svg", alt: "Ader Logo" },
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
