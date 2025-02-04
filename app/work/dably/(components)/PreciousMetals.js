import Image from "next/image";
import { motion } from "framer-motion";
import { Animated } from "@/app/reusable-components/Motion";

export default function PreciousMetals() {
  const topImageVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  };

  const leftImageVariant = {
    hidden: { opacity: 0, x: -600 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="xl:px-20 px-4 md:px-8 lg:px-14 flex flex-col lg:gap-15 gap-8 md:gap-12">
      <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-c-white">
        Revolutionising Precious Metals
      </h1>
      <Animated
        variants={topImageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          width={0}
          height={0}
          alt="precious-medals"
          src={"/images/works/dably/precious-metals-img-1.webp"}
          className="w-full"
          unoptimized
        />
      </Animated>
      <Image
        width={0}
        height={0}
        alt="precious-medals"
        src={"/images/works/dably/precious-metals-img-2.webp"}
        className="w-full"
        unoptimized
      />
    </div>
  );
}
