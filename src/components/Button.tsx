type ButtonType = {
  text: string;
  className: string;
};

export default function Button({ text, className }: ButtonType) {
  return (
    <div
      className={`${className} flex cursor-pointer items-center justify-center rounded-lg bg-primary font-semibold text-background transition-all hover:opacity-80`}
    >
      {text}
    </div>
  );
}
