export const Footer = () => {
  return (
    <footer className=" bg-c-white px-4 c-md:px-8 lg:px-10 py-10 flex flex-col gap-15 font-bebas">
      <p className="text-c-black text-13.5 c-md:text-15.5 -tracking-1 leading-none"> 
        Your Search for a design partner ends here..
      </p>
      <div className="custom-height relative group overflow-hidden">
        {/* <h2 className="text-c-black footer-text-size  md:-tracking-9.41 -tracking-5.04 underline absolute left-0 footer-text-1 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-700"> */}
        <h2 className="text-c-black footer-text-size underline absolute left-0 footer-text-1 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-700">
          GET IN TOUCH
        </h2>
        {/* <h2 className="group-hover:text-c-black footer-text-size underline absolute left-0 footer-text-2 text-c-white translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-700"> */}
        <h2 className="group-hover:text-c-black footer-text-size underline absolute left-0 footer-text-2 text-c-white translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-700">
          GET IN TOUCH
        </h2>
      </div>
    </footer>
  );
};
