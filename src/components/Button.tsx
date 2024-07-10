type ButtonType = {
  text: string;
  customStyles: string;
};

export default function Button({ text, customStyles }: ButtonType) {
  return (
    <div
      className={`${customStyles} cursor-pointer rounded-lg bg-primary font-semibold text-background transition-all hover:opacity-80`}
    >
      {text}
    </div>
  );
}
