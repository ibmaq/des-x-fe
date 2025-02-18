"use client";
import { reviewsData } from "@/public/utils/data";
import { motion } from "motion/react";

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center px-4 c-md:px-8 2xl:px-15 py-15 2xl:py-35 c-container overflow-hidden">
      <h2 className="font-bebas text-white text-6xl c-md:text-27.5 lg:text-48 leading-none -tracking-2 uppercase text-left w-full">
        What People say
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {reviewsData.map((review, reviewIndex) => (
          <motion.div
            key={reviewIndex}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            // transition={{ duration: 0.2, delay: reviewIndex * 1.05 }}
            // viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col gap-7"
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
            <p className="text-c-white font-extrabold text-2xl/1.2 c-md:text-10.5/1.2 max-sm:uppercase italic">
              {review.content}
            </p>
            <div className="flex flex-col text-gray-200 font-medium">
              <p className="text-xl c-md:text-6.5/1.4">{review.title}</p>
              <p className="text-sm c-md:text-base/1.4">{review.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
