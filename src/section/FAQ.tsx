import { useState } from "react";

import { VscChevronDown } from "react-icons/vsc";
import TitleLight from "../components/TitleLight";
import { faqData } from "../data.json";

type FaqType = {
  question: string;
  answer: string;
};

const AccordionItem = ({ question, answer }: FaqType) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div onClick={() => setOpen(!open)}>
      <div className="mx-6 flex cursor-pointer flex-row items-center gap-10 rounded-3xl bg-background px-7 py-5 text-start text-lg text-white md:py-6 md:text-2xl">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <span className="w-10/12 md:w-full">{question}</span>
            <VscChevronDown
              size={40}
              className={`rounded-full bg-primary p-2 font-extralight text-background transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>
          <span
            className={`mt-4 block text-lg font-extralight leading-tight opacity-80 ${open ? "block" : "hidden"}`}
          >
            {answer}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center pb-72 pt-28 text-center">
      <TitleLight
        title="FAQ's"
        description=" Providing answers to your questions"
      />
      <div className="mt-12 flex w-full max-w-2xl flex-col gap-4 px-4 md:mt-20">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
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
