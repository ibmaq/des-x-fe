import Image from "next/image";

export const TrustedBy = () => {
  const logos = ["dably", "pendfunds", "rentto", "snovos"];

  // Shuffle the logos array to ensure randomness
  const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);

  return (
    <section className="flex flex-col items-center">
      <h2 className="section-title">Trusted by several Funded Startups</h2>
      <div className="enable-animation-mobile relative w-screen">
        <div className="marquee py-10">
          <ul
            className="marquee__content"
            style={{
              gap: "16px !important",
            }}
          >
            {[...Array(12)].map((_, idx) => {
              const logo = shuffledLogos[idx % shuffledLogos.length];

              return (
                <li
                  className="max-sm:h-22 px-5 py-3 w-screen max-w-[285px] c-md:max-w-[438px] 2xl:max-w-[522px] object-contain flex justify-center items-center border border-gray-700 relative"
                  key={idx}
                >
                  {/* SVG Corners */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`corner-icon ${
                        i === 0
                          ? "top-left"
                          : i === 1
                          ? "top-right"
                          : i === 2
                          ? "bottom-left"
                          : "bottom-right"
                      } ${idx % 2 === 0 ? "" : "rotate-45"}`}
                    >
                      <Image
                        width={40}
                        height={0}
                        src="/images/star.png"
                        alt={`logo-for-${logo} marquee__item`}
                        unoptimized
                      />
                    </div>
                  ))}

                  {/* Logo Image */}
                  <Image
                    width={100}
                    height={0}
                    src={`/images/works/logos-small/${logo}.png`}
                    alt={`logo-for-${logo} marquee__item`}
                    className="grayscale max-sm:w-12.5"
                    unoptimized
                  />
                </li>
              );
            })}
          </ul>
          <ul aria-hidden="true" className="marquee__content">
            {[...Array(12)].map((_, idx) => {
              const logo = shuffledLogos[idx % shuffledLogos.length];

              return (
                <li
                  className="px-5 py-3 w-screen max-w-[285px] c-md:max-w-[438px] 2xl:max-w-[522px] object-contain flex justify-center items-center border border-gray-700 relative"
                  key={idx}
                >
                  {/* SVG Corners */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`corner-icon ${
                        i === 0
                          ? "top-left"
                          : i === 1
                          ? "top-right"
                          : i === 2
                          ? "bottom-left"
                          : "bottom-right"
                      } ${idx % 2 === 0 ? "" : "rotate-45"}`}
                    >
                      <Image
                        width={40}
                        height={0}
                        src="/images/star.png"
                        alt={`logo-for-${logo} marquee__item`}
                      />
                    </div>
                  ))}

                  {/* Logo Image */}
                  <Image
                    width={100}
                    height={0}
                    src={`/images/works/logos-small/${logo}.png`}
                    alt={`logo-for-${logo} marquee__item`}
                    className="grayscale"
                    unoptimized
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
