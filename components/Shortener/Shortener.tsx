import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";

export default function Shortener() {
  return (
    <>
      <div className="flex justify-center mx-6 px-6 lg:mx-40 my-5 bg-shortener-pattern m-auto rounded-xl">
        <form
          className=" w-full my-3 lg:mt-5 pb-3"
          id="shortener-form" /* onSubmit={handleSubmit} */
        >
          <input
            type="search"
            placeholder="Shorten a link here..."
            autoFocus
            className="my-3 py-1 pl-5 h5Mobile rounded w-full lg:w-3/4 inline"
            /* onChange={handleCityChange} */
          />

          <input
            type="submit"
            value="Shorten It!"
            className="bg-cyan py-2 rounded w-full lg:w-1/5 lg:ml-5 font-poppins-bold text-h4Mobile text-white"
            id="search-form"
          />
        </form>
      </div>
    </>
  );
}
