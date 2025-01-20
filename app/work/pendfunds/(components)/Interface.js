import Image from "next/image";

export default function Interface() {
  return (
    <div className="flex flex-col gap-15">
        <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
          User
          <br /> INTERFACE
        </h1>
        <div className="grid grid-cols-2 w-full gap-6.5">
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
        <div className="grid grid-cols-2 w-full gap-6.5">
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
