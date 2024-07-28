import TitleLight from "../components/TitleLight";
import { worksImages } from "../data.json";

export default function BeautifulWorks() {
  return (
    <div className="py-[4.9rem]">
      <TitleLight
        title="Our Beautiful Works"
        description={`We help our clients grow their bottom-line with clear and \n professional websites.`}
      />
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
  );
}
