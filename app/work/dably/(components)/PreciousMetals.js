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
    <div className="px-20 flex flex-col gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
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
      <Animated
        variants={leftImageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          width={0}
          height={0}
          alt="precious-medals"
          src={"/images/works/dably/precious-metals-img-2.webp"}
          className="w-full"
          unoptimized
        />
      </Animated>
    </div>
  );
}
