import Link from "next/link";
import HeaderSection from "../dably/(components)/HeaderSection";
import HowItHappened from "./(components)/HowItHappened";
import Interface from "./(components)/Interface";
import UserPersonas from "./(components)/UserPersonas";

export default function Page() {
  return (
    <>
      <HeaderSection heading={"PENDFUNDS"}>
        <span className="*:max-md:size-44">
          <svg
            width={263}
            height={263}
            viewBox="0 0 263 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_19_2026)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.5268 195.494C95.2319 194.342 93.931 193.178 92.6263 192.006C90.2302 189.854 87.8203 187.671 85.405 185.467C83.4994 177.634 84.0402 166.412 87.0909 156.652L103.989 172.591C99.7333 180.327 97.3399 188.077 96.5268 195.494ZM140.066 206.622L183.148 247.26C163.202 247.613 160.005 245.726 140.43 231.727C139.081 230.762 137.662 229.719 136.179 228.604C134.986 227.707 133.749 226.763 132.476 225.776C132.708 224.117 133.117 222.391 133.639 220.631C135.013 215.998 137.28 211.197 140.066 206.622ZM47.3355 149.201C44.1782 146.046 41.1357 142.96 38.2419 139.975C37.4873 139.197 36.7425 138.426 36.0087 137.662C32.7311 134.397 28.8137 113.078 38.5973 110.909L52.708 124.218C49.4085 132.903 47.6483 141.301 47.3355 149.201Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M152.858 125.291C169.338 106.886 184.542 90.391 184.542 90.391C184.542 90.391 185.661 89.1809 171.779 75.2988C157.897 61.4171 155.873 63.3492 155.873 63.3492L139.697 81.2329L138.098 58.6152L114.174 58.2966C113.815 58.2917 113.491 58.0767 113.347 57.7464C113.204 57.4171 113.266 57.033 113.508 56.7662L113.509 56.7651L100.02 44.0417C99.2432 43.3087 99.194 42.0881 99.9114 41.2955L117.968 21.3342C118.322 20.9432 118.818 20.7107 119.346 20.6892C119.874 20.6687 120.388 20.8612 120.771 21.2228L134.2 33.8905L149.65 16.8103C150.16 16.2454 150.927 15.9874 151.675 16.1281C154.872 17.254 165.437 22.6526 193.843 49.4472C223.408 77.3363 229.667 88.1863 230.961 91.1883C231.088 91.8587 230.895 92.5499 230.438 93.0552C228.364 95.3644 223.153 101.126 223.153 101.126L215.015 110.122L228.907 123.225C229.684 123.959 229.732 125.179 229.016 125.971L210.959 145.933C210.606 146.324 210.108 146.556 209.581 146.578C209.053 146.599 208.539 146.406 208.155 146.044L194.324 132.996L178.98 149.959L191.133 161.434C191.825 162.088 192.044 163.098 191.687 163.98C191.33 164.861 190.468 165.434 189.517 165.421L145.633 164.837C144.433 164.821 143.445 163.888 143.361 162.691L140.265 118.913C140.198 117.964 140.719 117.07 141.58 116.664C142.44 116.256 143.461 116.419 144.153 117.071L152.858 125.291Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M117.315 105.979L87.3249 139.134C76.6242 152.93 74.1504 179.028 79.3332 191.835C54.3867 179.174 47.9447 150.394 63.5487 118.681L47.0441 103.112C46.1303 102.251 46.074 100.816 46.9161 99.8846L64.5094 80.4343C64.9261 79.9738 65.5101 79.701 66.1308 79.6769C66.7503 79.6512 67.3545 79.8781 67.8062 80.3041L80.9791 92.7295L91.2533 81.3693L80.8861 71.5802C80.1955 70.9273 79.9746 69.9165 80.3322 69.035C80.6898 68.1525 81.5511 67.5808 82.5025 67.5935L126.386 68.1779C127.587 68.1935 128.574 69.1259 128.658 70.3231L131.754 114.102C131.821 115.051 131.299 115.944 130.439 116.351C129.579 116.758 128.558 116.596 127.866 115.944L117.315 105.979ZM139.306 194.163C128.921 207.486 121.381 225.002 125.936 236.257C103.537 226.966 94.7256 195.679 116.755 167.241C120.384 162.554 125.84 156.057 132.112 148.806L133.922 174.4L156.6 174.701L170.247 187.574C171.16 188.435 171.217 189.87 170.375 190.801L156.01 206.682C155.594 207.141 155.011 207.414 154.39 207.439C153.771 207.464 153.166 207.238 152.715 206.812L139.306 194.163Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_19_2026"
                x="-38.1126"
                y="-38.2527"
                width="339.225"
                height="339.225"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="19.3063"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_19_2026"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_19_2026"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </HeaderSection>
      <div className="flex flex-col lg:gap-20 gap-10 py-10 md:py-20 xl:px-20 px-4 c-md:px-8 2xl:px-15">
        <HowItHappened />
        <UserPersonas />
        <Interface />
      </div>
      <Link
        href="/contact-us"
        className="hover:rounded-2xl transition-all duration-150 ease-linear sticky bottom-6 group mx-auto w-95 md:w-106  flex justify-center items-center z-10 max-md:px-4 custom-border p-3 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
      >
        <button className="w-full  uppercase flex items-center justify-between border whitespace-nowrap p-5 rounded-2.5 bg-primary group-hover:bg-c-blue border-c-blue text-white font-extrabold text-base lg:text-xl leading-none -tracking-0.19 group-hover:rounded-12 transition-all duration-150 ease-linear">
          Let’s Discuss Your Project!
          <svg
            viewBox="0 0 25 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="size-7"
          >
            <path d="M20.9975 12.5341C21.0949 12.2789 21.1203 11.998 21.0707 11.7271C21.021 11.4562 20.8984 11.2073 20.7185 11.012L15.5753 5.42631C15.4567 5.29294 15.3148 5.18656 15.158 5.11337C15.0011 5.04019 14.8324 5.00166 14.6616 5.00005C14.4909 4.99844 14.3216 5.03377 14.1636 5.10399C14.0056 5.1742 13.862 5.27789 13.7413 5.409C13.6206 5.54012 13.5251 5.69603 13.4604 5.86765C13.3958 6.03926 13.3632 6.22315 13.3647 6.40856C13.3662 6.59398 13.4017 6.77722 13.4691 6.94759C13.5365 7.11796 13.6344 7.27205 13.7572 7.40086L16.7068 10.6043H4.38119C4.04018 10.6043 3.71313 10.7514 3.472 11.0133C3.23087 11.2752 3.0954 11.6303 3.0954 12.0007C3.0954 12.3711 3.23087 12.7262 3.472 12.9881C3.71313 13.25 4.04018 13.3971 4.38119 13.3971H16.7068L13.7585 16.5991C13.6357 16.728 13.5377 16.882 13.4704 17.0524C13.403 17.2228 13.3675 17.406 13.366 17.5914C13.3645 17.7769 13.3971 17.9607 13.4617 18.1324C13.5264 18.304 13.6218 18.4599 13.7426 18.591C13.8633 18.7221 14.0069 18.8258 14.1649 18.896C14.3229 18.9662 14.4922 19.0016 14.6629 18.9999C14.8337 18.9983 15.0024 18.9598 15.1593 18.8866C15.3161 18.8134 15.458 18.7071 15.5766 18.5737L20.7198 12.988C20.8389 12.858 20.9333 12.7038 20.9975 12.5341Z" />
          </svg>
        </button>
      </Link>
      <div className="mt-10" />
    </>
  );
}
