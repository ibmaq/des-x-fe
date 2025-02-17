import Image from "next/image";

export default function Portal() {
  return (
    <div className="flex flex-col lg:gap-15 md:gap-12 gap-8">
      <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-c-white">
        Web (User PortaL)
      </h1>
      <div className="flex flex-col gap-8 relative">
        <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/user-portal-${
                    idx + 1
                  }.webp`}
                  alt={`user-portal-${idx + 1} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/user-portal-${
                    idx + 1
                  }.webp`}
                  alt={`user-portal-${idx + 1} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="enable-animation-flipped">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/user-portal-${
                    idx + 6
                  }.webp`}
                  alt={`user-portal-${idx + 6} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/user-portal-${
                    idx + 6
                  }.webp`}
                  alt={`user-portal-${idx + 6} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
        <div className="absolute bg-custom-gradient h-full w-61 left-0 top-0 rotate-180 max-lg:hidden" />
        <div className="absolute bg-custom-gradient h-full w-61 right-0 top-0 max-lg:hidden" />
      </div>
      <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-c-white">
        Web (Admin)
      </h1>
      <div className="flex flex-col gap-8 relative">
        <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(6)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/admin-${idx + 1}.webp`}
                  alt={`admin-${idx + 1} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {[...Array(6)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/admin-${idx + 1}.webp`}
                  alt={`admin-${idx + 1} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="enable-animation-flipped">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(6)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/admin-${idx + 7}.webp`}
                  alt={`admin-${idx + 7} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {[...Array(6)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/admin-${idx + 7}.webp`}
                  alt={`admin-${idx + 7} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
        <div className="absolute bg-custom-gradient h-full w-61 left-0 top-0 rotate-180 max-lg:hidden" />
        <div className="absolute bg-custom-gradient h-full w-61 right-0 top-0 max-lg:hidden" />
      </div>
    </div>
  );
}
