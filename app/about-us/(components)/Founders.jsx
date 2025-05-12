"use client";
import { useEffect, useState } from "react";
import FounderCard from "./FounderCard";

export default function Founders() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <div className="founders-gradient-border"></div>
      <section className="flex flex-col gap-20 items-center justify-center px-4 c-md:px-8 2xl:px-15 3xl:px-0 py-35 c-container-2">
        <div className="w-full flex flex-col gap-10">
          {/* Heading */}
          <p className="text-13.5/none c-md:text-20/none 2xl:text-30/none text-c-white font-bebas -tracking-3.84">
            Meet the Founders
          </p>

          {/* Desktop Layout - Side by Side */}
          {!isMobile ? (
            <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-8">
              <FounderCard
                isMobile={false}
                name="Osama Jilani"
                title="Product Designer"
                role="Founder"
                image="/images/founder-img.webp"
                description="We don't just design to make things look pretty, we design to
                  solve real problems, communicate clearly, and help businesses
                  scale. From SaaS dashboards to mobile apps; We've helped teams
                  bring clarity to chaos and turn rough ideas into powerful user
                  experiences."
              />
              <FounderCard
                isMobile={false}
                name="Ibrahim Qureshi"
                title="Software Engineer"
                role="Co-Founder"
                image="/images/co-founder-img.webp"
                description="I turn ideas into clean, scalable software—fast. From system
                  design to UI, I build with purpose, work with focus, and keep
                  things clear—even when they get complicated."
                delay={1}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-20">
              <FounderCard
                isMobile={true}
                name="Osama Jilani"
                title="Product Designer"
                role="Founder"
                image="/images/founder-img.webp"
                description="We don't just design to make things look pretty, we design to
                  solve real problems, communicate clearly, and help businesses
                  scale. From SaaS dashboards to mobile apps; We've helped teams
                  bring clarity to chaos and turn rough ideas into powerful user
                  experiences."
              />
              <FounderCard
                isMobile={true}
                name="Ibrahim Qureshi"
                title="Software Engineer"
                role="Co-Founder"
                image="/images/co-founder-img.webp"
                description="I turn ideas into clean, scalable software—fast. From system
                  design to UI, I build with purpose, work with focus, and keep
                  things clear—even when they get complicated."
              />
            </div>
          )}
        </div>
      </section>
      <div className="founders-gradient-border"></div>
    </>
  );
}
