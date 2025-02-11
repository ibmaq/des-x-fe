"use client";
import { Button } from "@/app/reusable-components/Button";
import { contactBudgetsList, contactServicesList } from "@/public/utils/data";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, 120]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 280]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 60]);

  const [budgetConfig, setBudgetConfig] = useState({
    toggle: true,
    selectedBudget: null,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    projectDetails: "",
    selectedServices: [],
    budget: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        selectedServices: checked
          ? [...prev.selectedServices, value]
          : prev.selectedServices.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div ref={ref} className="contact-wrapper">
      <div className="w-full flex flex-col gap-10 c-container-3 py-35 lg:py-42.25 px-4 c-md:px-8 lg:px-0">
        <div className="flex flex-col gap-5 lg:text-center">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-22.5/none c-md:text-29/none 2xl:text-30/none text-c-white font-bebas sm:-tracking-2 c-md:-tracking-3.84"
          >
            Let’s bring your Ideas to Reality!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base/1.4 c-md:text-xl/6 text-gray-400 capitalize w-full -tracking-0.19"
          >
            Got an idea? A project in mind? Or just want to chat about design?
            Let’s connect and create something amazing together. Book a meeting
            or drop us a message—we’re all ears!
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10 2xl:mx-22.875 *:appearance-none *:text-c-white *:placeholder:text-c-white/70 *:pb-4 *:text-xl/6 *:-tracking-0.19 origin-top w-full"
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            aria-label="Full name"
            className="focus:outline-none border-b border-c-white-2/20 bg-transparent"
          ></input>
          <input
            type="text"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Business Email"
            aria-label="Business Email"
            className="focus:outline-none border-b border-c-white-2/20 bg-transparent"
          ></input>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Tell us a little about your project"
            aria-label="Tell us a little about your project"
            rows={4}
            className="focus:outline-none border-b border-c-white-2/20 bg-transparent"
          ></textarea>
          <div className="flex flex-col gap-7">
            <label className="text-c-white-2/60">
              What do you need help with:
            </label>
            <div className="flex flex-col gap-5">
              {contactServicesList.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex gap-2 items-center">
                  <div className="c-checkbox">
                    <input
                      type="checkbox"
                      name="selectedServices"
                      value={service.title}
                      checked={formData.selectedServices.includes(
                        service.title
                      )}
                      onChange={handleChange}
                    />
                  </div>
                  <label className="text-base/none">{service.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div
              className="flex justify-between cursor-pointer border-b border-c-white-2/20 pb-4"
              onClick={() =>
                setBudgetConfig((prev) => ({ ...prev, toggle: !prev.toggle }))
              }
            >
              <p>
                Your Budget{" "}
                <span className="text-c-white/30">(Approximate)</span>
              </p>
              <span
                className={`size-6 ${
                  budgetConfig.toggle ? "rotate-180" : "rotate-0"
                } transition-transform duration-300 ease-linear`}
              >
                <svg
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0172 16.5C11.6459 16.4999 11.2899 16.3597 11.0274 16.1101L5.4274 10.7877C5.29369 10.665 5.18703 10.5181 5.11366 10.3558C5.04029 10.1935 5.00167 10.0188 5.00005 9.84217C4.99844 9.66549 5.03386 9.49028 5.10425 9.32675C5.17465 9.16323 5.2786 9.01466 5.41005 8.88973C5.5415 8.76479 5.69781 8.66599 5.86987 8.59909C6.04192 8.53218 6.22627 8.49851 6.41217 8.50005C6.59806 8.50159 6.78176 8.53829 6.95257 8.60803C7.12337 8.67776 7.27786 8.77913 7.407 8.90622L12.0172 13.2879L16.6274 8.90622C16.8914 8.66384 17.2451 8.52972 17.6122 8.53275C17.9792 8.53578 18.3304 8.67572 18.5899 8.92243C18.8495 9.16913 18.9968 9.50287 18.9999 9.85175C19.0031 10.2006 18.862 10.5367 18.607 10.7877L13.007 16.1101C12.7445 16.3597 12.3885 16.4999 12.0172 16.5Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full h-full overflow-hidden">
              <div
                className={`${
                  budgetConfig.toggle
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "-translate-y-full opacity-0 pointer-events-none"
                } text-white *:px-4 *:py-2 border border-gray-400 rounded-lg py-1 bg-c-black *:cursor-pointer *:transition-colors *:duration-150 *:ease-in transition-all duration-300 ease-linear`}
              >
                {contactBudgetsList.map((budget, budgetIndex) => (
                  <p
                    key={budgetIndex}
                    className={`text-base ${
                      budgetConfig?.selectedBudget === budget.title
                        ? "bg-primary font-semibold"
                        : "hover:bg-primary/60"
                    }`}
                    onClick={() =>
                      setBudgetConfig((prev) => ({
                        ...prev,
                        selectedBudget: budget.title,
                      }))
                    }
                  >
                    {budget.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Button
            text={"Send Message"}
            icon={"rightArrow"}
            theme={"primary"}
            width={"w-full"}
          />
        </motion.form>
      </div>
      <div className="contact-bg">
        <motion.div className="contact-bg-img-1" style={{ y: y1 }}>
          <Image
            src={"/images/services/1-blurred.png"}
            alt="asbtract-image-look-like-shiny-metal-strips-rounded-to-make-rings"
            width={400}
            height={376}
          />
        </motion.div>
        <motion.div className="contact-bg-img-2" style={{ y: y2 }}>
          <Image
            src={"/images/services/2-blurred.png"}
            alt="asbtract-image-look-like-shiny-metal-strips-rounded-to-make-rings"
            width={268}
            height={252}
          />
        </motion.div>
        <motion.div className="contact-bg-img-3" style={{ y: y3 }}>
          <Image
            src={"/images/services/3-blurred.png"}
            alt="asbtract-image-look-like-shiny-metal-strips-rounded-to-make-rings"
            width={501}
            height={470}
          />
        </motion.div>
      </div>
    </div>
  );
}
