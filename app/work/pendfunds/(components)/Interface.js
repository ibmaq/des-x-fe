import Image from "next/image";

export default function Interface() {
  return (
    <div className="flex flex-col lg:gap-15 gap-8 md:gap-12">
        <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-cust-white">
          User
          <br className="max-md:hidden"/> INTERFACE
        </h1>
        <div className="grid grid-cols-2 w-full md:gap-6.5 gap-3">
          <Image
            width={0}
            height={0}
            alt={"user-interface-image-1"}
            src={"/images/works/pend-funds/user-interface-1.webp"}
            className="w-full"
            unoptimized
          />
          <Image
            width={0}
            height={0}
            alt={"user-interface-image-2"}
            src={"/images/works/pend-funds/user-interface-2.webp"}
            className="w-full"
            unoptimized
          />
        </div>
        <div className="grid grid-cols-2 w-full md:gap-6.5 gap-3">
          <Image
            width={0}
            height={0}
            alt={"user-interface-image-3"}
            src={"/images/works/pend-funds/user-interface-3.webp"}
            className="w-full"
            unoptimized
          />
          <Image
            width={0}
            height={0}
            alt={"user-interface-image-4"}
            src={"/images/works/pend-funds/user-interface-4.webp"}
            className="w-full"
            unoptimized
          />
        </div>
        <Image
          width={0}
          height={0}
          alt={"user-interface-image-5"}
          src={"/images/works/pend-funds/user-interface-5.webp"}
          className="w-full"
          unoptimized
        />
        <Image
          width={0}
          height={0}
          alt={"user-interface-image-6"}
          src={"/images/works/pend-funds/user-interface-6.webp"}
          className="w-full"
          unoptimized
        />
      </div>
  );
}
