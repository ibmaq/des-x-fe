"use client";
import { motion } from "framer-motion"; // Changed from motion/react to framer-motion
import Image from "next/image";

export default function Founders() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      x: -50,
      y: -50,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="founders-gradient-border"></div>
      <section className="flex flex-col gap-20 items-center justify-center px-4 c-md:px-8 2xl:px-15 3xl:px-0 py-35 c-container-2">
        <div className="w-full flex flex-col gap-10">
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-13.5/none c-md:text-20/none 2xl:text-30/none text-c-white font-bebas -tracking-3.84"
          >
            Meet the Founders
          </motion.p>
          {/* To-animate */}
          <motion.div
            className="flex flex-col 2xl:flex-row gap-10 2xl:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-5 2xl:gap-10 2xl:w-1/2"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Image
                  src={"/images/founder-img.webp"}
                  alt="mobile-prototype-design"
                  width={644}
                  height={577}
                  className="rounded-1 w-full"
                  unoptimized
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-5"
                variants={itemVariants}
              >
                <div className="flex flex-col max-2xl:gap-4">
                  <div className="flex flex-col 2xl:flex-row justify-between">
                    <p className="text-11.5/none 2xl:text-20/none font-bebas text-c-white -tracking-2 2xl:-tracking-3.84">
                      Osama Jilani
                    </p>
                    <p className="text-base/none 2xl:text-2xl/none text-c-gray-2 font-medium">
                      Product Designer
                    </p>
                  </div>
                  <p className="text-2xl 2xl:text-8 leading-1.2 text-primary font-medium">
                    Founder
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm/1.4 c-md:text-xl/1.2 text-gray-400 w-full"
              >
                We don't just design to make things look pretty, we design to
                solve real problems, communicate clearly, and help businesses
                scale. From SaaS dashboards to mobile apps; We've helped teams
                bring clarity to chaos and turn rough ideas into powerful user
                experiences.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5 2xl:gap-10 2xl:w-1/2"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Image
                  src={"/images/co-founder-img.webp"}
                  alt="mobile-prototype-design"
                  width={644}
                  height={577}
                  className="rounded-1 w-full"
                  unoptimized
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-5"
                variants={itemVariants}
              >
                <div className="flex flex-col max-2xl:gap-4">
                  <div className="flex flex-col 2xl:flex-row justify-between">
                    <p className="text-11.5/none 2xl:text-20/none font-bebas text-c-white -tracking-2 2xl:-tracking-3.84">
                      Ibrahim Qureshi
                    </p>
                    <p className="text-base/none 2xl:text-2xl/none text-c-gray-2 font-medium">
                      Software Engineer
                    </p>
                  </div>
                  <p className="text-2xl 2xl:text-8 leading-1.2 text-primary font-medium">
                    Co-Founder
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm/1.4 c-md:text-xl/1.2 text-gray-400 w-full"
              >
                I turn ideas into clean, scalable software—fast. From system
                design to UI, I build with purpose, work with focus, and keep
                things clear—even when they get complicated.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="founders-gradient-border"></div>
    </>
  );
}
