"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

export const WhatWeOffer = () => {
  const servicesData = [
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

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const glow = document.createElement("div");
      glow.classList.add("glowing-orb");
      card.appendChild(glow);

      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        // GSAP animation for 3D effect (card movement)
        gsap.to(card, {
          duration: 0.1,
          rotationY: (xPercent - 50) * 0.2,
          rotationX: (yPercent - 50) * -0.2,
          ease: "power2.out",
        });

        // GSAP animation to move the glow with the cursor
        gsap.to(glow, {
          duration: 0.1,
          x: x, // Position the glow at the cursor position
          y: y, // Position the glow at the cursor position
          opacity: 1, // Make glow visible when hovering
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.3,
        });

        // Fade out glow when mouse leaves the card
        gsap.to(glow, {
          opacity: 0,
          duration: 0.3,
        });
      });

      // Initially hide the glow
      gsap.set(glow, { opacity: 0 });
    });
  }, []);

  return (
    <div className="what-we-offer flex flex-col gap-20 items-center justify-center lg:py-30 max-sm:px-6">
      <div className="flex flex-col gap-3 items-center text-center">
        <h2 className="section-title">
          How we Make sure you receive the Best!
        </h2>
        <p className="text-gray-300 text-xl/normal font-medium capitalize">
          Today's users judge fast and scroll faster. We create <br />
          designs that stop them in their tracks through...
        </p>
      </div>
      {/* <div className="flex flex-col gap-20 lg:mx-12"> */}
      <div className="container grid grid-cols-3 gap-5">
        {servicesData.map((work, workIndex) => (
          <div
            key={workIndex}
            className="card flex flex-col gap-8 lg:p-10 rounded-xl border border-c-white/30 bg-c-black overflow-hidden"
            style={{ transition: "width 0.3s ease" }}
          >
            <Image
              src={work.img}
              alt="mobile-prototype-design"
              width={450}
              height={90}
              className="border border-c-white/30 rounded-md"
            />
            <div className="flex flex-col gap-3">
              <p className="text-15.5 lg:text-10/none text-white font-bebas">
                {work.title}
              </p>
              <p className="flex gap-2 text-base/snug text-gray-400 -tracking-0.19">
                {work.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
