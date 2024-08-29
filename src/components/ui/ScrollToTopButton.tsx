import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <a
          href="/#header"
          className="fixed bottom-4 right-4 z-50 rounded-full bg-primary p-2 shadow-lg"
        >
          <span className="block transform transition-transform duration-300 hover:rotate-[360deg]">
            <ArrowUp />
          </span>
        </a>
      )}
    </div>
  );
}
