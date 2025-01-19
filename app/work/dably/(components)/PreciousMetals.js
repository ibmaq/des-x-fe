import Image from "next/image";

export default function PreciousMetals() {
  return (
    <div className="px-20 flex flex-col gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
        Revolutionising Precious Metals
      </h1>
      <Image
        width={0}
        height={0}
        alt="precious-medals"
        src={"/images/works/dably/precious-metals-img-1.webp"}
        className="w-full"
        unoptimized
      />
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
