import { useState } from "react";

import { VscChevronDown } from "react-icons/vsc";
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
    <div>
      <div className="flex flex-col items-center justify-center py-28 text-center">
        <h1 className="text-3xl font-extrabold tracking-tighter md:text-5xl">
          FAQ's
        </h1>
        <div className="pt-5">
          <p className="text-background opacity-80 md:text-lg">
            Providing answers to your questions
          </p>
        </div>
        <div className="mt-12 flex w-full max-w-2xl flex-col gap-4 px-4 md:mt-20">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
