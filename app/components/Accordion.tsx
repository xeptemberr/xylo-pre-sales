"use client";

import { useState } from "react";
import { FAQItem } from "@/app/data/faqData";

interface AccordionProps {
  items: FAQItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className=""
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay={index * 100}
        >
          <div
            className="flex justify-between items-center cursor-pointertransition-colors cursor-pointer min-h-[112px]"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[26px] text-[var(--gray-006)] font-medium pr-4">
              {item.question}
            </h3>
            <span className="text-[#CAEBC8] text-[32px] font-medium">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[20px] text-[var(--gray-006)] font-light leading-relaxed px-20 pt-8 pb-24">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
