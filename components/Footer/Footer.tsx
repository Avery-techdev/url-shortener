import Logo from "../Icons/Logo";
import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";

export default function Footer() {
  return (
    <footer className=" bg-very-dark-violet lg:flex lg:justify-between py-14 lg:px-20 text-white text-center lg:text-left">
      <Logo className=" fill-white block mx-auto mb-12 lg:w-1/4" />
      <ul aria-label="features" className=" text-h5Mobile lg:w-1/5">
        <li className=" font-bold mb-4 text-h4Mobile">Features</li>
        <li className=" mb-2">Link Shortening</li>
        <li className="mb-2">Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul aria-label="resources" className=" text-h5Mobile mt-10 lg:mt-0 lg:w-1/5">
        <li className=" font-bold mb-4 text-h4Mobile">Resources</li>
        <li className=" mb-2">Blog</li>
        <li className="mb-2">Developers</li>
        <li>Support</li>
      </ul>
      <ul aria-label="company" className=" text-h5Mobile mt-10 lg:mt-0 lg:w-1/5">
        <li className=" font-bold mb-4 text-h4Mobile">Company</li>
        <li className=" mb-2">About</li>
        <li className="mb-2">Our Team</li>
        <li className="mb-2">Carreers</li>
        <li>Contact</li>
      </ul>
      <ul aria-label="social-links" className=" mt-12 lg:mt-2 lg:w-1/5">
        <li className=" inline-block mx-3">
          <Image
            src={`${require("../../public/svgs/facebook.svg?url")}`}
            width="24px"
            height="24px"
            loader={Loader}
            alt="Logo Facebook"
          />
        </li>
        <li className=" inline-block mx-3">
          <Image
            src={`${require("../../public/svgs/twitter.svg?url")}`}
            width="24px"
            height="24px"
            loader={Loader}
            alt="Logo Twitter"
          />
        </li>
        <li className=" inline-block mx-3">
          <Image
            src={`${require("../../public/svgs/pinterest.svg?url")}`}
            width="24px"
            height="24px"
            loader={Loader}
            alt="Logo Pinterest"
          />
        </li>
        <li className=" inline-block mx-3">
          <Image
            src={`${require("../../public/svgs/instagram.svg?url")}`}
            width="24px"
            height="24px"
            loader={Loader}
            alt="Logo Instagram"
          />
        </li>
      </ul>
    </footer>
  );
}
