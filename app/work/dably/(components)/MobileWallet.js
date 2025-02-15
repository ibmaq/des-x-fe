import Image from "next/image";

export default function MobileWallet() {
  return (
    <>
      <Image
        src={"/images/works/dably/mobile-ring-interface.webp"}
        width={0}
        height={0}
        className="w-full"
        alt="user-interface-ring"
        unoptimized
      />
      <div className="flex flex-col lg:gap-15 md:gap-12 gap-8">
        <h1 className="xl:text-48/172 text-17/none md:text-29 font-bebas md:-tracking-3.84 -tracking-2.88 text-center text-c-white">
          Mobile Wallet
        </h1>
        <section className="enable-animation-mobile relative">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(12)].map((_, idx) => (
                <Image
                  key={idx}
                  width={296}
                  height={0}
                  src={`/images/works/dably/mobile-wallet/${idx + 1}.webp`}
                  alt={`mobile-wallet-${idx + 1} marquee__item`}
                  className="max-md:w-36 md:max-lg:w-56"
                  unoptimized
                />
              ))}
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {[...Array(12)].map((_, idx) => (
                <Image
                  key={idx}
                  width={296}
                  height={0}
                  src={`/images/works/dably/mobile-wallet/${idx + 1}.webp`}
                  alt={`mobile-wallet-${idx + 1} marquee__item`}
                  className="max-md:w-36 md:max-lg:w-56"
                  unoptimized
                />
              ))}
            </ul>
          </div>
          <div className="absolute bg-custom-gradient h-full w-61 left-0 top-0 rotate-180 max-lg:hidden" />
          <div className="absolute bg-custom-gradient h-full w-61 right-0 top-0 max-lg:hidden" />
        </section>
      </div>
    </>
  );
}
