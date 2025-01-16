import Image from "next/image";
import { Button } from "../../reusable-components/Button";

export const WhatWeOffer = () => {
  const worksData = [
    {
      id: 0,
      title: "WEB App DESIGN",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 1,
      title: "Mobile App Design",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 2,
      title: "LANDING PAGE",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 3,
      title: "Pitch Deck",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
  ];
  return (
    <div className="flex flex-col gap-20 items-center justify-center py-30 px-20">
      <h2 className="font-bebas text-white text-48 leading-0.9 -tracking-3.84 uppercase">
        What we Offer
      </h2>
      <div className="flex flex-col gap-20 mx-12">
        {worksData.map((work, workIndex) => (
          <div
            key={workIndex}
            className="flex gap-25 p-10 rounded-xl border border-cust-white/30"
          >
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col">
                <p className="font-extrabold text-30/1.2 text-white font-bebas -tracking-2.88">
                  {work.title}
                </p>
                <p className="flex gap-2 text-base/snug text-gray-400 -tracking-0.19">
                  {work.content}
                </p>
              </div>
              <Button
                text={"start a project"}
                icon={"plus"}
                theme={"primary"}
              />
            </div>
            <Image
              src={work.img}
              alt="mobile-prototype-design"
              width={450}
              height={90}
              className="border border-cust-white/30 rounded-md mt-4 inline-flex"
            />
          </div>
        ))}
      </div>
      <Button text={"see all services"} icon={"arrow"} theme={"secondary"} />
    </div>
  );
};
