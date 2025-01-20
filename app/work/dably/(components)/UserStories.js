import Image from "next/image";

export default function UserStories() {
  return (
    <div className="px-20 flex flex-col gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
        User
        <br /> Stories
      </h1>
      <Image
        width={0}
        height={0}
        alt="precious-medals"
        src={"/images/works/dably/user-stories-1.webp"}
        className="w-full"
        unoptimized
      />
      <div className="w-full grid grid-cols-2 gap-6.5">
        <Image
          width={0}
          height={0}
          alt="precious-medals"
          src={"/images/works/dably/user-stories-2.webp"}
          className="w-full"
          unoptimized
        />
        <Image
          width={0}
          height={0}
          alt="precious-medals"
          src={"/images/works/dably/user-stories-3.webp"}
          className="w-full"
          unoptimized
        />
      </div>
    </div>
  );
}
