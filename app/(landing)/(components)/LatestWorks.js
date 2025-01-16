import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import Link from "next/link";

export const LatestWorks = () => {
  const worksData = [
    {
      id: 0,
      title: "Pendfunds",
      img: "/images/works/pendfunds.png",
      services: ["UX/UI Design", "Web Development"],
    },
    {
      id: 1,
      title: "Dably",
      img: "/images/works/dably.png",
      services: ["UX/UI Design", "Web Development"],
    },
    {
      id: 2,
      title: "Snovos",
      img: "/images/works/snovos.png",
      services: ["UX/UI Re-Design"],
      comingSoon: true,
    },
    {
      id: 3,
      title: "Rentto",
      img: "/images/works/rentto.png",
      services: ["UX/UI Re-Design"],
      comingSoon: true,
    },
  ];
  return (
    <div className="flex flex-col gap-15 items-center justify-center py-30 px-4 lg:px-20">
      {/* <h2 className="font-bebas text-white text-48 leading-0.9 -tracking-3.84 uppercase">
        Our Latest Works
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9.5">
        {worksData.map((work, workIndex) => (
          <Link
            key={workIndex}
            href={"#"}
            className="flex flex-col gap-5 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-in-out relative"
          >
            <div className="border border-cust-white/30 rounded-md overflow-hidden">
              <Image
                src={work.img}
                alt="mobile-prototype-design"
                width={1000}
                height={90}
              />
            </div>
            <div className="flex max-sm:flex-col justify-between lg:items-center uppercase">
              <p className="font-extrabold text-xl lg:text-2xl/1.2 text-white">
                {work.title}
              </p>
              <div className="flex gap-2 text-base lg:text-4.8/none text-gray-400 -tracking-0.19">
                {work.services.map((service, serviceIndex) => (
                  <p key={serviceIndex}>{service}</p>
                ))}
              </div>
            </div>
            {/* <div className="absolute inset-0 m-auto bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center">
              <p className="text-2xl/none text-cust-white -tracking-0.19">
                Coming Soon
              </p>
            </div> */}
          </Link>
        ))}
      </div>
      <Button text={"see all works"} icon={"arrow"} theme={"secondary"} />
    </div>
  );
};
