export default function Brands() {
  const brandsLogo = [
    { name: "Layers", src: "./assets/brands/brand01.svg" },
    { name: "Quotient", src: "./assets/brands/brand02.svg" },
    { name: "Circooles", src: "./assets/brands/brand03.svg" },
    { name: "Hooglass", src: "./assets/brands/brand04.svg" },
    { name: "Command+R", src: "./assets/brands/brand05.svg" },
  ];

  return (
    <div className="mt-20">
      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-8 mr-8 h-0.5 w-12 border-0 bg-primary"></hr>
        <h2 className="text-center font-medium text-white">
          TRUSTED BY AMAZING BRANDS
        </h2>
        <hr className="my-8 ml-8 h-0.5 w-12 border-0 bg-primary"></hr>
      </div>
      <ul className="mx-7 mt-8 flex flex-wrap justify-center gap-8 rounded-2xl bg-bgCard py-7">
        {brandsLogo.map((brand) => (
          <li
            key={brand.name}
            className="flex list-none flex-row items-center gap-3"
          >
            <img
              src={brand.src}
              alt={`${brand.name} logo`}
              className="h-10 w-10"
            />
            <span className="text-2xl font-semibold text-lightGray">
              {brand.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
