import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";

export default function Header() {
  return (
    <>
      <section className="flex px-6 lg:px-40 my-20 items-center flex-row flex-wrap justify-end">
        <div className="text-center lg:text-left order-1 lg:order-0 lg:w-1/2">
          <h1 className="h1Mobile py-5 font-bold lg:w-10/12">
            More than just shorter links
          </h1>
          <h4 className="h4Mobile lg:w-10/12">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h4>
          <button className="bg-cyan w-48 py-3 mt-8 rounded-full h3Mobile text-white">
            Get Started
          </button>
        </div>
        <div className="order-0 lg:order-1 lg:w-1/2 -z-10">
          <Image
            src={`${require("../../public/svgs/working_with_computer.svg?url")}`}
            width="733px"
            height="482px"
            loader={Loader}
            alt="a person is working with a computer"
          />
        </div>
      </section>
    </>
  );
}
