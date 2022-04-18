import Image from "next/image";
import { Loader } from "../../ImageLoader/Loader";
import { useState } from "react";

type Props = {
  results: {
    result: {
      short_link: string;
      original_link: string;
    };
  };
};

export default function Results({ results }: Props) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const [changeBg, setChangeBg] = useState("bg-cyan");

  function copyToClipboard(e) {
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
    setChangeBg("bg-dark-violet");
  }
  if (results) {
    return (
      <div className=" bg-white mx-6 lg:mx-40 mt-6 py-5 text-h5Mobile lg:text-h4 leading-9 rounded lg:flex justify-between">
        <div className="px-6 font-poppins-bold">{results.result.original_link}</div>
        <hr className="text-grayish-violet opacity-30 lg:hidden" />
        <div className=" px-6 lg:flex">
          <div className="text-cyan font-poppins-bold">
            {results.result.short_link}
          </div>
          <button
            className={`${changeBg} text-body py-1 rounded w-full lg:px-8 lg:ml-5 font-poppins-bold text-white mb-4 lg:mb-0`}
            onClick={copyToClipboard}
          >
            {copySuccess}
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
