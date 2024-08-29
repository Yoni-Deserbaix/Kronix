import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  return (
    <div>
      <a
        href="/#header"
        className="fixed bottom-4 right-4 rounded-full bg-primary p-2 shadow-lg"
      >
        <span className="block transform transition-transform duration-300 hover:rotate-[360deg]">
          <ArrowUp />
        </span>
      </a>
    </div>
  );
}
