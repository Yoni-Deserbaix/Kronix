type TitleType = {
  className?: string;
  category?: string;
  title: string;
  titleStyle?: string;
  description?: string;
  descriptionStyles?: string;
};

export default function TitleDark({
  className,
  category,
  title,
  titleStyle,
  description,
  descriptionStyles,
}: TitleType) {
  return (
    <div className={`pt-36 text-center text-white ${className}`}>
      <p className="text-lg font-normal uppercase text-primary">{category}</p>
      <h1
        className={`mx-auto mt-4 text-3xl font-bold leading-tight md:text-5xl ${titleStyle}`}
      >
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
