type FakeButtonType = {
  text: string | React.ReactNode;
  className: string;
};

export default function FakeButton({ text, className }: FakeButtonType) {
  return (
    <div
      className={`${className} active h flex items-center justify-center rounded-lg bg-primary font-semibold text-background transition-all`}
    >
      {text}
    </div>
  );
}
