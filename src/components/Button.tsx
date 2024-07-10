type ButtonType = {
  text: string;
};

export default function Button({ text }: ButtonType) {
  return (
    <div className="cursor-pointer rounded-lg bg-primary px-10 py-4 font-semibold text-background transition-all hover:opacity-80">
      {text}
    </div>
  );
}
