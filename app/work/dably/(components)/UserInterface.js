import Image from "next/image";

export default function UserInterface() {
  return (
    <div className="px-20 flex flex-col relative gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
        User
        <br /> Interface
      </h1>
        <Image
          width={0}
          height={0}
          alt="precious-medals"
          src={"/images/works/dably/user-interface-1.webp"}
          className="w-full"
          unoptimized
        />
        <Image
          width={0}
          height={0}
          alt="precious-medals"
          src={"/images/works/dably/user-interface-2.webp"}
          className="w-full"
          unoptimized
        />
    </div>
  );
}
