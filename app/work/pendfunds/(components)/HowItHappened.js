import Image from "next/image";

export default function HowItHappened() {
  return (
    <div className="flex flex-col gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
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
      <div className="grid grid-cols-2 w-full gap-6.5">
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
