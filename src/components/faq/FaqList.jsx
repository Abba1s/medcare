import React from "react";
import FaqItem from "./FaqItem";
import { faqs } from "../../assets/data/faqs";

const FaqList = () => {
  return (
    <>
     
      <div className="flex flex-col gap-[2rem]">
        {faqs.map((faq, index) => {
          return (
            <FaqItem
              key={index}
              question={faq.question}
              content={faq.content}
            />
          );
        })}
      </div>
    </>
  );
};

export default FaqList;
