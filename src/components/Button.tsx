type ButtonType = {
  text: string;
};

export default function Button({ text }: ButtonType) {
  return (
    <div className="py-4 px-10 bg-primary font-semibold cursor-pointer text-background rounded-lg hover:opacity-80 transition-all">
      {text}
    </div>
  );
}
