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
      <div className="flex flex-col gap-15">
        <h1 className="text-48 font-bebas -tracking-3.84 text-center leading-172 text-cust-white">
          Mobile Wallet
        </h1>
        <div className="flex flex-col gap-8">
          <section className="enable-animation">
            <div className="marquee">
              <ul className="marquee__content">
                {[...Array(12)].map((_, idx) => (
                  <Image
                    key={idx}
                    width={296}
                    height={0}
                    src={`/images/works/dably/mobile-wallet/${idx + 1}.webp`}
                    alt={`mobile-wallet-${idx + 1} marquee__item`}
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
                    unoptimized
                  />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
