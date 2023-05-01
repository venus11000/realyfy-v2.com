import React, { useState } from "react";
import { faqs } from "../../utils/constants/site-settings";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(-1);
  return (
    <div>
      <h2 className="text-primary text-xl text-center font-bold mb-4">FAQ's</h2>
      <ul>
        {faqs?.map((faq, index) => (
          <li
            className="bg-slate-100 hover:bg-slate-200 rounded-md mb-4"
            onClick={() =>
              activeFaq === index ? setActiveFaq(-1) : setActiveFaq(index)
            }
          >
            <div className="px-5 py-3 text-lg font-semibold flex items-center justify-between cursor-pointer">
              {faq?.question}
              {activeFaq === index ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
            {activeFaq === index && (
              <div className="px-5 py-3">{faq?.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
