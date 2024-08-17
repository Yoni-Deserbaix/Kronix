type TitleType = {
  className?: string;
  category?: string;
  title: string;
  description?: string;
  descriptionStyles?: string;
  titleStyles?: string;
};

export default function TitleLight({
  className,
  category,
  title,
  description,
  descriptionStyles,
  titleStyles,
}: TitleType) {
  return (
    <div className={`pt-28 text-center text-background ${className}`}>
      <p className="text-lg font-normal uppercase">{category}</p>
      <h1
        className={`mt-4 text-3xl font-extrabold tracking-tighter md:text-5xl ${titleStyles}`}
      >
        {title &&
          title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}{" "}
      </h1>
      <div className="pt-4">
        <p
          className={`mx-8 text-background/70 md:text-lg ${descriptionStyles}`}
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
