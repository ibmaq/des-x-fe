"use client";
import { reviewsData } from "@/public/utils/data";
import { motion } from "motion/react";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col gap-10 items-center justify-center px-4 c-md:px-8 2xl:px-15 3xl:px-0 py-15 2xl:py-35 c-container overflow-hidden">
        <h2 className="font-bebas text-white text-6xl c-md:text-27.5 lg:text-48 leading-none -tracking-2 uppercase text-left w-full">
          What People say
        </h2>
        <div className="flex flex-col lg:flex-row gap-15 2xl:gap-8 h-full">
          {reviewsData.map((review, reviewIndex) => (
            <motion.div
              key={reviewIndex}
              initial={{ opacity: 0, scale: 1.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: reviewIndex * 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-7 w-full grow basis-0"
            >
              <span className="w-12.5 h-12.5">
                <svg
                  viewBox="0 0 51 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 26.2882L11.8223 0.899414H21.7065L13.5665 24.1563H20.5436V44.7H0V26.2882ZM28.6835 26.2882L40.5058 0.899414H50.39L42.2501 24.1563H49.2272V44.7H28.6835V26.2882Z"
                    fill="#FCFFF4"
                    fillOpacity="0.3"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-7 justify-between h-full">
              <p className="text-c-white font-extrabold text-2xl/1.2 c-md:text-8/1.2 italic">
                {review.content}
              </p>
              <div className="flex gap-3">
                <Image
                  src={review.img}
                  alt={`personal-image-of-${review.img}-for-testimonial`}
                  width={81}
                  height={75}
                  className="rounded"
                />
                <div className="flex flex-col text-gray-200 font-medium">
                  <p className="text-xl c-md:text-7/1.4 -tracking-0.19">{review.title}</p>
                  <p className="text-base/1.4 c-md:text-base/1.4 -tracking-0.19">
                    {review.designation}
                  </p>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
