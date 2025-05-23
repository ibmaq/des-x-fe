"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, updateActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const menuItems = [
    { title: "home", link: "/" },
    { title: "works", link: "/#works" },
    { title: "about", link: "/about-us" },
    { title: "contact", link: "/contact-us" },
  ];

  const handleActiveState = () => {
    updateActive((prev) => {
      const newActiveState = !prev;
      document.body.style.overflowY = newActiveState ? "hidden" : "auto";
      return newActiveState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 10) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <nav
      className={`${
        active
          ? "top-6 lg:top-10 translate-y-0"
          : isSticky || lastScrollTop === 0
          ? "top-6 lg:top-10 translate-y-0"
          : "top-0 -translate-y-full"
      } sticky max-w-216 mx-6 c-md:mx-auto z-50 transition-all ease-linear duration-300`}
    >
      <div
        className={`flex justify-between items-center px-4 py-3 border border-gray-50 backdrop-blur-2xl bg-c-white/8 rounded-t-xl z-10 transition-all ease-in-out ${
          active ? "rounded-b-0 delay-75" : "rounded-b-xl delay-500"
        } relative`}
      >
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="des-x-design-logo"
            width={137}
            height={26}
          />
        </Link>
        <span
          className={`menu-burger-icon size-10 ${active ? "active" : ""}`}
          onClick={() => handleActiveState()}
        >
          <svg
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.52"
              y="1.49"
              width="37.39"
              height="37.39"
              rx="18.695"
              stroke="#F9FAFB"
            />
            <rect
              className="menu-burger-line top"
              x="10.11"
              y="16.38"
              width="18.19"
              height={1}
              fill="#F9FAFB"
            />
            <rect
              className="menu-burger-line btm"
              x="10.11"
              y="22.99"
              width="18.19"
              height={1}
              fill="#F9FAFB"
            />
          </svg>
        </span>
      </div>
      <div
        className={`absolute max-h-121.75 lg:max-h-80 left-0 top-16.4 w-full lg:w-216 border border-gray-50 border-t-0 rounded-b-9.6 overflow-hidden bg-c-white/8 backdrop-blur-2xl z-10 transition-all ease-in-out duration-500 ${
          active
            ? "h-screen pointer-events-auto"
            : "h-0 pointer-events-none border-0"
        }`}
      >
        <ul
          className={`flex max-sm:flex-col h-full font-bebas text-5xl bg-c-white/8 backdrop-blur-2xl  transition-opacity ease-in-out duration-500 ${
            active ? "opacity-100 delay-200" : "opacity-0"
          }`}
        >
          {menuItems.map((item, itemIndex) => (
            <li
              className="w-full *:border *:border-transparent *:max-sm:border-b-gray-50 *:max-sm:last:border-b-0  *:lg:border-r-gray-50 *:lg:last:border-r-0"
              key={itemIndex}
            >
              <Link
                href={item.link}
                className={`relative group flex items-end w-full h-full p-9 menu-link`}
                onClick={() => handleActiveState()}
              >
                <div className="text-container">
                  <span className="absolute left-0 w-full transition-all ease-in-out duration-500 max-sm:text-c-white span-white leading-none z-1">
                    {item.title}
                  </span>
                  <span className="hidden lg:block absolute left-0 w-full transition-all ease-in-out duration-500 span-black leading-none z-1">
                    {item.title}
                  </span>
                </div>
                <span
                  className={`hidden lg:block absolute left-0 bottom-0 w-full h-full bg-c-white transition-transform ease-in-out duration-700 translate-y-[101%] group-hover:translate-y-0 -z-1`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
