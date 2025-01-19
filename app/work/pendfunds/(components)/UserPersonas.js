import Image from "next/image";

export default function UserPersonas() {
  return (
    <div className="flex flex-col gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
        USER
        <br /> PERSONAS
      </h1>

      <div className="grid grid-cols-2 w-full gap-6.5">
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
