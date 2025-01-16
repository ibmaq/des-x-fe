export const Button = ({ text, icon, theme = "primary" | "secondary" }) => {
  return (
    <>
      <div
        className={`uppercase flex w-full items-center justify-between rounded-2.5 backdrop-blur-10 p-5 border ${
          theme === "primary"
            ? "bg-primary border-cust-blue text-white"
            : "bg-cust-white border-white "
        } font-extrabold text-xl/none -tracking-0.19 max-w-105.5`}
      >
        {text}
        <span className="size-7">
          {icon === "plus" ? (
            <svg
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_57490)">
                <path
                  d="M15.9949 13.1999V2.3999H13.5949V13.1999H2.79492V15.5999H13.5949V26.3999H15.9949V15.5999H26.7949V13.1999H15.9949Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_57490">
                  <rect
                    width="28.8"
                    height="28.8"
                    fill="white"
                    transform="translate(0.39502)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : icon === "play" ? (
            <svg
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_57501)">
                <g clipPath="url(#clip1_1_57501)">
                  <path
                    d="M7.74561 5.11206V23.5441L22.7216 14.3281L7.74561 5.11206Z"
                    stroke="white"
                    strokeWidth="2.304"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_57501">
                  <rect
                    width="28.8"
                    height="28.8"
                    fill="white"
                    transform="translate(0.200195)"
                  />
                </clipPath>
                <clipPath id="clip1_1_57501">
                  <rect
                    width="28.8"
                    height="28.8"
                    fill="white"
                    transform="translate(0.200195)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : icon === "arrow" ? (
            <svg
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_57646)">
                <g clipPath="url(#clip1_1_57646)">
                  <mask
                    id="mask0_1_57646"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={30}
                    height={30}
                  >
                    <path
                      d="M29.195 0.749512H0.39502V29.5495H29.195V0.749512Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_57646)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5091 5.46423H25.0796V20.0348H22.6796V9.5613L7.75761 24.4834L6.06055 22.7863L20.9826 7.86423H10.5091V5.46423Z"
                      fill="#111928"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_57646">
                  <rect
                    width="28.8"
                    height="28.8"
                    fill="white"
                    transform="translate(0.39502 0.749512)"
                  />
                </clipPath>
                <clipPath id="clip1_1_57646">
                  <rect
                    width="28.8"
                    height="28.8"
                    fill="white"
                    transform="translate(0.39502 0.749512)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <></>
          )}
        </span>
      </div>
    </>
  );
};
