import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import FadeUp from "../components/animations/FadeUp";
import TitleLight from "../components/ui/TitleLight";
import { faqData } from "../data.json";

type AccordionType = {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
};

export const AccordionItem = ({
  question,
  answer,
  open,
  onClick,
}: AccordionType) => {
  return (
    <div onClick={onClick}>
      <div className="mx-6 flex cursor-pointer flex-row items-center gap-10 rounded-3xl bg-background px-7 py-5 text-start text-lg text-white md:py-6 md:text-2xl">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <span className="w-10/12 md:w-full">{question}</span>
            <VscChevronDown
              size={40}
              className={`rounded-full p-1 font-extralight text-primary transition-transform duration-200 ease-linear ${open ? "rotate-180" : ""}`}
            />
          </div>
          <AnimatePresence>
            {open && (
              <motion.span
                className="mt-4 block text-lg/tight font-extralight opacity-80"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: "16px",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
              >
                {answer}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-center justify-center pb-72 text-center"
      id="faq"
    >
      <FadeUp>
        <TitleLight
          title="FAQ's"
          description="Providing answers to your questions"
        />
      </FadeUp>
      <div className="mt-12 flex w-full max-w-2xl flex-col gap-4 px-4 md:mt-20">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
        <div className="mx-auto w-[85%] md:w-11/12">
          <textarea
            placeholder="Ask us what you want to know..."
            className="border-1 pla mx-auto h-48 w-full resize-none rounded-2xl border border-background p-4"
          ></textarea>
          <div className="mx-1 flex items-center justify-between pt-4">
            <p className="pr-2 text-start text-background opacity-80 md:w-[302px]">
              We will answer your questions via email within 48 hours.
            </p>
            <button className="h-12 w-[140px] rounded-full bg-primary font-semibold transition-all hover:opacity-95 active:opacity-60">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
