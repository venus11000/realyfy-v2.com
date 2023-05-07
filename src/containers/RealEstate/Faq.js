import React, { useState } from "react";
import { faqs } from "../../utils/constants/site-settings";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(-1);
  return (
    <div>
      <h2 className="text-primary text-xl md:text-2xl text-center font-bold mb-4">FAQ's</h2>
      <ul>
        {faqs?.map((faq, index) => (
          <li
            className="bg-slate-100 hover:bg-slate-200 rounded-md mb-4"
            onClick={() =>
              activeFaq === index ? setActiveFaq(-1) : setActiveFaq(index)
            }
          >
            <div className="px-5 py-3 text-sm md:text-lg text-justify font-semibold flex items-center justify-between cursor-pointer">
              {faq?.question}
              {activeFaq === index ? (
                <i className="pl-5 fa-solid fa-chevron-up"></i>
              ) : (
                <i className="pl-5 fa-solid fa-chevron-down"></i>
              )}
            </div>
            {activeFaq === index && (
              <div className="text-sm md:text-lg text-justify px-5 py-3">{faq?.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
