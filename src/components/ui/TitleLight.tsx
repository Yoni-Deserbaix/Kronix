type TitleType = {
  className?: string;
  title: string;
  description?: string;
  descriptionStyles?: string;
  titleStyles?: string;
};

export default function TitleLight({
  className,
  title,
  description,
  descriptionStyles,
  titleStyles,
}: TitleType) {
  return (
    <div className={`text-center text-background ${className}`}>
      <h1
        className={`text-3xl font-extrabold tracking-tighter md:text-5xl ${titleStyles}`}
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
          className={`mx-8 text-background opacity-80 md:text-lg ${descriptionStyles}`}
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
