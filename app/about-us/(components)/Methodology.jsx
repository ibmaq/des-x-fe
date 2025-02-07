"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { methodsData } from "@/public/utils/data";

export default function Methodology() {
  const swiperRef = useRef(null);

  return (
    <div className="w-screen py-60 select-none overflow-hidden">
      <div className="w-full flex flex-col gap-10">
        {/* Heading */}
        <div className="flex justify-between items-center w-full c-container-2">
          <p className="text-13.5/none c-md:text-20/none 2xl:text-30/none text-c-white font-bebas -tracking-3.84">
            Methodology
          </p>
          <p className="text-sm/1.4 c-md:text-xl/1.2 text-gray-400 capitalize text-right w-full max-w-[573px]">
            Understanding your vision is where it all begins. We dive deep into
            your goals, audience, and challenges to uncover opportunities that
            drive impact. Research and collaboration lay the foundation for
            success.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-full flex justify-end c-container-2">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <svg
                width={30}
                height={29}
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6 6.67L5.88 14.4L13.6 22.12L14.87 20.85L9.32 15.29H23.34V13.5H9.32L14.87 7.94L13.6 6.67Z"
                  fill="#FCFFF4"
                />
              </svg>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <svg
                width={30}
                height={29}
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.68 6.67L24.4 14.4L16.68 22.12L15.41 20.85L20.96 15.29H6.94V13.5H20.96L15.41 7.94L16.68 6.67Z"
                  fill="#FCFFF4"
                />
              </svg>
            </button>
          </div>

          {/* Swiper Slider */}
          <div className="w-full h-full c-container-2 overflow-visible relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Mousewheel]}
              spaceBetween={20}
              loop={false}
              navigation={false}
              mousewheel={{ forceToAxis: true }}
              grabCursor={true}
              className="absolute inset-0 w-screen 4xl:max-w-screen-3xl"
              slidesPerView={"auto"}
            >
              {methodsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="p-2 border border-c-white/30 rounded-xl bg-c-black flex flex-col gap-0.5 h-full max-w-[571px]">
                    <div className="p-1.5 rounded-md bg-c-white/12 font-bebas text-c-white text-2xl/0.8 w-fit">
                      {`${index < 10 ? "0" : ""}${index + 1}`}
                    </div>
                    <div className="p-8 pt-0 flex flex-col gap-20">
                      <div className="flex flex-col">
                        <p className="text-13.5/none c-md:text-20/none 2xl:text-30/none text-c-white font-bebas -tracking-3.84">
                          {item.title}
                        </p>
                        <p className="text-sm/1.4 c-md:text-xl/1.2 text-gray-200 capitalize w-full">
                          {item.subTitle}
                        </p>
                      </div>
                      <p className="text-sm/1.4 c-md:text-xl/1.2 text-gray-100 capitalize w-full">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
