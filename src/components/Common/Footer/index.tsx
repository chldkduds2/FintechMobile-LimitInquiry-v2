"use client";

import React from "react";
import { useFooterTerms } from "@/hooks/Common/Footer/FooterTerms/useFooterTerms";
import ApprovedDataListClickContainer from "./ListClickContainer/index";

const Footer = () => {
  const { footerTermList } = useFooterTerms();

  return (
    <React.Fragment>
      <ApprovedDataListClickContainer />
      <div className="w-full h-2 bg-gray-99">
        <div className="pt-10 pl-6 pr-6 pb-[10%]">
          <div className="mb-3 text-14-medium text-uniqueGray-40">안내사항</div>
          {footerTermList.map((term, index) => (
            <ul
              className="ml-1 mt-1 flex list-outside list-['-'] flex-col gap-1"
              key={index}
            >
              <li className="list-outside list-['-'] pl-[3px] text-12-medium text-uniqueGray-70">
                {term}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
