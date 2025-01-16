export const Button = ({ text, icon, theme = "primary" | "secondary" }) => {
  return (
    <button
      className={`uppercase flex w-full items-center justify-between rounded-2.5 backdrop-blur-10 p-5 border ${
        theme === "primary"
          ? "bg-primary hover:bg-cust-blue border-cust-blue text-white"
          : "bg-cust-white hover:bg-cust-white/80 border-white "
      } font-extrabold text-base lg:text-xl leading-none -tracking-0.19 max-w-105.5 hover:scale-105 hover:rounded-12 transition-all duration-150 ease-linear`}
    >
      {text}
      <span className="size-7">
        <Icon name={icon} theme={theme} />
      </span>
    </button>
  );
};

const Icon = ({ name, theme }) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: theme === "primary" ? "white" : "#111928",
  };

  const icons = {
    plus: (
      <svg viewBox="0 0 30 29" {...commonProps}>
        <path d="M15.9949 13.1999V2.3999H13.5949V13.1999H2.79492V15.5999H13.5949V26.3999H15.9949V15.5999H26.7949V13.1999H15.9949Z" />
      </svg>
    ),
    play: (
      <svg viewBox="0 0 29 29" {...commonProps}>
        <path
          d="M7.74561 5.11206V23.5441L22.7216 14.3281L7.74561 5.11206Z"
          stroke={theme === "primary" ? "white" : "#111928"}
          strokeWidth="2.304"
        />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 30 30" {...commonProps}>
        <path d="M10.5091 5.46423H25.0796V20.0348H22.6796V9.5613L7.75761 24.4834L6.06055 22.7863L20.9826 7.86423H10.5091V5.46423Z" />
      </svg>
    ),
  };

  return icons[name] || null;
};
