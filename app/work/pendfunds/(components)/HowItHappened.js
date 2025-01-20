import Image from "next/image";

export default function HowItHappened() {
  return (
    <div className="flex flex-col lg:gap-15 gap-8 md:gap-12">
      <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-cust-white">
        How It happened
      </h1>
      <Image
        width={0}
        height={0}
        alt={"how-it-happened-image-1"}
        src={"/images/works/pend-funds/how-it-happened-1.webp"}
        className="w-full"
        unoptimized
      />
      <div className="grid grid-cols-2 w-full md:gap-6.5 gap-3">
        <Image
          width={0}
          height={0}
          alt={"how-it-happened-image-2"}
          src={"/images/works/pend-funds/how-it-happened-2.webp"}
          className="w-full"
          unoptimized
        />
        <Image
          width={0}
          height={0}
          alt={"how-it-happened-image-3"}
          src={"/images/works/pend-funds/how-it-happened-3.webp"}
          className="w-full"
          unoptimized
        />
      </div>
      {[...Array(3)].map((_, idx) => (
        <Image
          key={idx}
          width={0}
          height={0}
          alt={`how-it-happened-image-${idx + 4}`}
          src={`/images/works/pend-funds/how-it-happened-${idx + 4}.webp`}
          className="w-full"
          unoptimized
        />
      ))}
    </div>
  );
}
