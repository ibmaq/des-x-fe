import Image from "next/image";

export default function Portal() {
  return (
    <div className="flex flex-col gap-15">
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
        Web (User PortaL)
      </h1>
      <div className="flex flex-col gap-8">
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
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="enable-animation">
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
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
      </div>
      <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
        Web (Admin)
      </h1>
      <div className="flex flex-col gap-8">
        <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(6)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/admin-${
                    idx + 1
                  }.webp`}
                  alt={`admin-${idx + 1} marquee__item`}
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
                  src={`/images/works/dably/portals/admin-${
                    idx + 1
                  }.webp`}
                  alt={`admin-${idx + 1} marquee__item`}
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(6)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/admin-${
                    idx + 7
                  }.webp`}
                  alt={`admin-${idx + 7} marquee__item`}
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
                  src={`/images/works/dably/portals/admin-${
                    idx + 7
                  }.webp`}
                  alt={`admin-${idx + 7} marquee__item`}
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
