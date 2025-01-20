export const Footer = () => {
  return (
    <footer className=" bg-cust-white lg:p-10 md:p-7 p-4 flex flex-col lg:gap-15 md:gap-12 gap-8 font-bebas">
      <p className="text-cust-black md:text-58/52 text-10/none max-w-647 -tracking-1.15">
        Hello, I'm Osama, a senior Product Designer based in Pakistan. With
        years of experience and a passion for cutting-edge design.
      </p>
      <div className="custom-height relative group overflow-hidden">
        <h2 className="text-cust-black footer-text-size  md:-tracking-9.41 -tracking-5.04 underline absolute left-0 footer-text-1 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-700">
          GET IN TOUCH
        </h2>
        <h2 className="group-hover:text-cust-black footer-text-size md:-tracking-9.41 -tracking-5.04 underline absolute left-0 footer-text-2 text-cust-white translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-700">
          GET IN TOUCH
        </h2>
      </div>
    </footer>
  );
};
