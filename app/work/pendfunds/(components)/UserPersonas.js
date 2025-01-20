import Image from "next/image";

export default function UserPersonas() {
  return (
    <div className="flex flex-col lg:gap-15 gap-8 md:gap-12">
      <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-cust-white">
        USER
        <br className="max-md:hidden"/> PERSONAS
      </h1>

      <div className="grid grid-cols-2 w-full md:gap-6.5 gap-3">
        <Image
          width={0}
          height={0}
          alt={"user-personas-image-1"}
          src={"/images/works/pend-funds/user-personas-1.webp"}
          className="w-full"
          unoptimized
        />
        <Image
          width={0}
          height={0}
          alt={"user-personas-image-2"}
          src={"/images/works/pend-funds/user-personas-2.webp"}
          className="w-full"
          unoptimized
        />
      </div>
      <Image
        width={0}
        height={0}
        alt={"user-personas-image-3"}
        src={"/images/works/pend-funds/user-personas-3.webp"}
        className="w-full"
        unoptimized
      />
    </div>
  );
}
