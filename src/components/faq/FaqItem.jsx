import React, { useState } from "react";

const FaqItem = ({ question, content }) => {
  const [questOpen, setQuestOpen] = useState(false);
  return (
    <div className="border border-gray-300 rounded p-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] leading-7 text-headingColor">{question}</h3>
        {questOpen === false ? (
          <span className="border border-gray-300 rounded py-1 px-2 cursor-pointer"
          
            onClick={() => {
              setQuestOpen(!questOpen);
            }}
          >
            +
          </span>
        ) : (
          <span className="border border-gray-300 py-1 px-3 text-white rounded bg-blue-600 font-[20px] cursor-pointer"
            onClick={() => {
              setQuestOpen(!questOpen);
            }}
          >
            -
          </span>
        )}
      </div>
      {
        questOpen && <p className="para mt-2">{content}</p>
      }
      
    </div>
  );
};

export default FaqItem;
