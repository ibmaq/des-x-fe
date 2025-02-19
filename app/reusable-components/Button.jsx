"use client";
import Link from "next/link";

export const Button = ({
  text,
  icon,
  theme = "primary",
  link = null,
  width = null,
  onClick = () => {},
  classes = "",
  styles = {},
}) => {
  const buttonClasses = `uppercase flex items-center justify-between backdrop-blur-10 border whitespace-nowrap p-5 rounded-2.5 ${
    theme === "primary"
      ? "bg-primary hover:bg-c-blue border-c-blue text-white"
      : theme === "secondary"
      ? "bg-c-white hover:bg-c-white/80 border-white"
      : "bg-transparent border-white text-white backdrop-blur-10"
  } font-extrabold text-base lg:text-xl leading-none -tracking-0.19 hover:rounded-12 transition-all duration-150 ease-linear ${
    width || "w-full max-w-105.5"
  } ${classes}`;

  const buttonContent = (
    <>
      {text}
      <span className="size-7">
        <Icon name={icon} theme={theme} />
      </span>
    </>
  );

  return link ? (
    <Link href={link} className={buttonClasses}>
      {buttonContent}
    </Link>
  ) : (
    <button className={buttonClasses} onClick={onClick} style={styles}>
      {buttonContent}
    </button>
  );
};

const Icon = ({ name, theme }) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill:
      theme === "primary"
        ? "white"
        : theme === "secondary"
        ? "#111928"
        : "white",
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
    pause: (
      <svg viewBox="0 0 24 24" {...commonProps}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 4.8C7 4.35817 7.3198 4 7.71429 4H9.14286C9.53735 4 9.85714 4.35817 9.85714 4.8V19.2C9.85714 19.6418 9.53735 20 9.14286 20H7.71429C7.52485 20 7.34316 19.9157 7.20921 19.7657C7.07525 19.6157 7 19.4122 7 19.2L7 4.8ZM14.1429 4.8C14.1429 4.35817 14.4627 4 14.8571 4H16.2857C16.4752 4 16.6568 4.08429 16.7908 4.23431C16.9247 4.38434 17 4.58783 17 4.8L17 19.2C17 19.6418 16.6802 20 16.2857 20H14.8571C14.4627 20 14.1429 19.6418 14.1429 19.2V4.8Z"
          fill="white"
        />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 30 30" {...commonProps}>
        <path d="M10.5091 5.46423H25.0796V20.0348H22.6796V9.5613L7.75761 24.4834L6.06055 22.7863L20.9826 7.86423H10.5091V5.46423Z" />
      </svg>
    ),
    rightArrow: (
      <svg viewBox="0 0 25 24" {...commonProps}>
        <path d="M20.9975 12.5341C21.0949 12.2789 21.1203 11.998 21.0707 11.7271C21.021 11.4562 20.8984 11.2073 20.7185 11.012L15.5753 5.42631C15.4567 5.29294 15.3148 5.18656 15.158 5.11337C15.0011 5.04019 14.8324 5.00166 14.6616 5.00005C14.4909 4.99844 14.3216 5.03377 14.1636 5.10399C14.0056 5.1742 13.862 5.27789 13.7413 5.409C13.6206 5.54012 13.5251 5.69603 13.4604 5.86765C13.3958 6.03926 13.3632 6.22315 13.3647 6.40856C13.3662 6.59398 13.4017 6.77722 13.4691 6.94759C13.5365 7.11796 13.6344 7.27205 13.7572 7.40086L16.7068 10.6043H4.38119C4.04018 10.6043 3.71313 10.7514 3.472 11.0133C3.23087 11.2752 3.0954 11.6303 3.0954 12.0007C3.0954 12.3711 3.23087 12.7262 3.472 12.9881C3.71313 13.25 4.04018 13.3971 4.38119 13.3971H16.7068L13.7585 16.5991C13.6357 16.728 13.5377 16.882 13.4704 17.0524C13.403 17.2228 13.3675 17.406 13.366 17.5914C13.3645 17.7769 13.3971 17.9607 13.4617 18.1324C13.5264 18.304 13.6218 18.4599 13.7426 18.591C13.8633 18.7221 14.0069 18.8258 14.1649 18.896C14.3229 18.9662 14.4922 19.0016 14.6629 18.9999C14.8337 18.9983 15.0024 18.9598 15.1593 18.8866C15.3161 18.8134 15.458 18.7071 15.5766 18.5737L20.7198 12.988C20.8389 12.858 20.9333 12.7038 20.9975 12.5341Z" />
      </svg>
    ),
  };

  return icons[name] || null;
};
