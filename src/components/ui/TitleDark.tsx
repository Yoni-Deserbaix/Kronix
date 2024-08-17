type TitleType = {
  className?: string;
  category?: string;
  title: string;
  description?: string;
  descriptionStyles?: string;
};

export default function TitleDark({
  className,
  category,
  title,
  description,
  descriptionStyles,
}: TitleType) {
  return (
    <div className={`pt-28 text-center text-white ${className}`}>
      <p className="text-lg font-normal uppercase text-primary">{category}</p>
      <h1 className="mx-auto mt-4 text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h1>
      <div className="pt-8">
        <p
          className={`text-md mx-auto w-11/12 max-w-[462px] text-center font-extralight opacity-80 md:text-lg ${descriptionStyles}`}
        >
          {description &&
            description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}
