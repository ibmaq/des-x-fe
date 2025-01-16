import Image from "next/image";
import { Button } from "../../reusable-components/Button";

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
  ];
  return (
    <div className="flex flex-col gap-15 items-center justify-center py-30 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9.5">
        {worksData.map((work, workIndex) => (
          <div key={workIndex} className="flex flex-col gap-5">
            <Image
              src={work.img}
              alt="mobile-prototype-design"
              width={1000}
              height={90}
              className="border border-cust-white/30 rounded-md mt-4 inline-flex"
            />
            <div className="flex justify-between items-center uppercase">
              <p className="font-extrabold text-2xl/1.2 text-white">
                {work.title}
              </p>
              <div className="flex gap-2 text-4.8/none text-gray-400 -tracking-0.19">
                {work.services.map((service, serviceIndex) => (
                  <p key={serviceIndex}>{service}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button text={"see all works"} icon={"arrow"} theme={"secondary"} />
    </div>
  );
};
