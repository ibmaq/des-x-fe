import Image from "next/image";

export default function UserStories() {
  return (
    <div className="xl:px-20 px-4 md:px-8 lg:px-14 flex flex-col lg:gap-15 gap-8 md:gap-12">
      <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-cust-white">
        User
        <br className="max-md:hidden"/> Stories
      </h1>
      <Image
        width={0}
        height={0}
        alt="precious-medals"
        src={"/images/works/dably/user-stories-1.webp"}
        className="w-full"
        unoptimized
      />
      <div className="w-full grid grid-cols-2 md:gap-6.5 gap-3">
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
