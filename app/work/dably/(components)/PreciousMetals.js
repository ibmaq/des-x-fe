import Image from "next/image";
import { Animated } from "@/app/reusable-components/Motion";

export default function PreciousMetals() {
  const topImageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="xl:px-20 px-4 c-md:px-8 2xl:px-15 3xl:px-0 flex flex-col lg:gap-20 gap-10">
      <h1 className="section-title text-c-white">
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
          className="w-full container c-container"
          unoptimized
        />
      </Animated>
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
          src={"/images/works/dably/precious-metals-img-2.webp"}
          className="w-full c-container"
          unoptimized
        />
      </Animated>
    </div>
  );
}
