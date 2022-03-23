import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";
import { CardTypes } from "./cardTypes";
import cardData from "./cards";

export default function Statistics() {
  return (
    <div className="bg-light-gray px-6 py-20 z-0 relative xl:px-40">
      <h2 className="h2Mobile text-center mb-4">Advanced Statistics</h2>
      <h5 className="h5Mobile text-center lg:w-1/3 lg:mx-auto mb-12">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </h5>
      <div className="border-l-8 border-cyan absolute h-[1000px] left-[49%] top-96 lg:hidden">
        {" "}
      </div>
      <div className=" lg:border-b-8 lg:border-cyan lg:absolute lg:top-1/2 lg:left-1/4 lg:w-1/2">
        {" "}
      </div>
      <div className="lg:flex lg:justify-between">
        {cardData.cards.map(
          ({ topImage, headline, text, marginTop }, index) => (
            <div className={`relative lg:w-1/4 ${marginTop}`} key={index}>
              <div className=" bg-dark-violet relative z-10 rounded-full mx-auto w-24 h-24">
                <div className=" relative top-7 left-7">
                  <Image
                    src={topImage}
                    width="40px"
                    height="40px"
                    loader={Loader}
                  />
                </div>
              </div>
              <div className="bg-white mt-12 px-8 pb-11 pt-20 relative bottom-24 lg:min-w-[380px]">
                <h3 className="headCards pb-3 lg:text-left">{headline}</h3>
                <p className="text-p text-center min-h-[180px] xl:min-h-[150px] lg:text-left">
                  {text}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
