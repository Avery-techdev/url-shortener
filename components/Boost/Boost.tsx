import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";

export default function Boost() {
  return (
    <div className=" bg-boost-background py-20 text-center">
      <h2 className=" text-h2Mobile lg:text-h2 font-bold text-white">
        Boost your links today
      </h2>
      <button className="bg-cyan w-48 py-3 mt-8 rounded-full h3Mobile text-white">
        Get Started
      </button>
    </div>
  );
}
