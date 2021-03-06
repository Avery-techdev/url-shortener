import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";
import Results from "./components/Results";
import axios from "axios";
import validator from "validator";
import { useState, useEffect } from "react";



export default function Shortener() {
  const [change, setChange] = useState("");
  const [results, setResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const inputstyle =
    errorMessage === "please enter a valid URL"
      ? "border-red border-8 placeholder:text-red"
      : "";


  function handleResponse(response) {
    setResults(response.data)
    console.log(response.data);
  }

  function shorten(event) {
    event.preventDefault();
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${change}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(e) {
    e.preventDefault();
    setChange(e.target.value);
    if (validator.isURL(e.target.value)) {
      return null
    } else {
      setErrorMessage("please enter a valid URL");
    }
  }

  return (
    <>
      <section className="bg-gradient-to-t from-light-gray via-white to-white">
        <div className=" flex justify-center mx-6 px-6 lg:mx-40 my-5 lg:my-0 bg-shortener-pattern m-auto rounded-xl">
          <form
            role="search"
            className=" w-full my-3 lg:mt-5 pb-3"
            id="shortener-form"
            onSubmit={shorten}
          >
            <input
              type="search"
              placeholder="Shorten a link here..."
              autoFocus
              className={`my-3 py-1 pl-5 h5Mobile rounded w-full lg:w-3/4 inline ${inputstyle}`}
              onChange={handleChange}
            />

            <input
              type="submit"
              value="Shorten It!"
              className="bg-cyan hover:bg-light-cyan py-2 rounded w-full lg:w-1/5 lg:ml-5 font-poppins-bold text-h4Mobile text-white hover:text-dark-violet"
              id="search-form"
            />
          </form>
        </div>
      </section>
      <section className=" bg-light-gray">
        <Results results={results} errorMessage={errorMessage} />
      </section>
    </>
  );
}
