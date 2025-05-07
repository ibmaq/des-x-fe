import Link from "next/link";
import { ServicesOffered } from "../reusable-components/ServicesOffered";
import { Hero } from "./(components)/Hero";
import { LatestWorks } from "./(components)/LatestWorks";
import Methodology from "./(components)/Methodology";
import MethodologySM from "./(components)/Methodology-sm";
import { Stats } from "./(components)/Stats";
import Founders from "./(components)/Founders";

export default function AboutUs() {
  return (
    <>
      <div className="w-full mx-auto">
        <Hero />
        <LatestWorks />
        <Stats />
        <div className="hidden 2xl:block">
          <Methodology />
        </div>
        <div className="2xl:hidden">
          <MethodologySM />
        </div>
        <Founders />
        <ServicesOffered />
      </div>
      <Link
        href="/contact-us"
        className="hover:rounded-2xl transition-all duration-150 ease-linear sticky bottom-6 group mx-auto w-95 md:w-106  flex justify-center items-center z-10 max-md:px-4 custom-border p-3 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
      >
        <button className="w-full  uppercase flex items-center justify-between border whitespace-nowrap p-5 rounded-2.5 bg-primary group-hover:bg-c-blue border-c-blue text-white font-extrabold text-base lg:text-xl leading-none -tracking-0.19 group-hover:rounded-12 transition-all duration-150 ease-linear">
          Let’s Discuss Your Project!
          <svg
            viewBox="0 0 25 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="size-7"
          >
            <path d="M20.9975 12.5341C21.0949 12.2789 21.1203 11.998 21.0707 11.7271C21.021 11.4562 20.8984 11.2073 20.7185 11.012L15.5753 5.42631C15.4567 5.29294 15.3148 5.18656 15.158 5.11337C15.0011 5.04019 14.8324 5.00166 14.6616 5.00005C14.4909 4.99844 14.3216 5.03377 14.1636 5.10399C14.0056 5.1742 13.862 5.27789 13.7413 5.409C13.6206 5.54012 13.5251 5.69603 13.4604 5.86765C13.3958 6.03926 13.3632 6.22315 13.3647 6.40856C13.3662 6.59398 13.4017 6.77722 13.4691 6.94759C13.5365 7.11796 13.6344 7.27205 13.7572 7.40086L16.7068 10.6043H4.38119C4.04018 10.6043 3.71313 10.7514 3.472 11.0133C3.23087 11.2752 3.0954 11.6303 3.0954 12.0007C3.0954 12.3711 3.23087 12.7262 3.472 12.9881C3.71313 13.25 4.04018 13.3971 4.38119 13.3971H16.7068L13.7585 16.5991C13.6357 16.728 13.5377 16.882 13.4704 17.0524C13.403 17.2228 13.3675 17.406 13.366 17.5914C13.3645 17.7769 13.3971 17.9607 13.4617 18.1324C13.5264 18.304 13.6218 18.4599 13.7426 18.591C13.8633 18.7221 14.0069 18.8258 14.1649 18.896C14.3229 18.9662 14.4922 19.0016 14.6629 18.9999C14.8337 18.9983 15.0024 18.9598 15.1593 18.8866C15.3161 18.8134 15.458 18.7071 15.5766 18.5737L20.7198 12.988C20.8389 12.858 20.9333 12.7038 20.9975 12.5341Z" />
          </svg>
        </button>
      </Link>
      <div className="mt-10" />
    </>
  );
}
