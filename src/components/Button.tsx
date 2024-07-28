type ButtonType = {
  text: string;
  className: string;
};

export default function Button({ text, className }: ButtonType) {
  return (
    <div
      className={`${className} active flex cursor-pointer items-center justify-center rounded-lg bg-primary font-semibold text-background transition-all hover:opacity-80 active:opacity-60`}
    >
      {text}
    </div>
  );
}
