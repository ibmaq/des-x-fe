import { Button } from "../../reusable-components/Button";

export const Testmionials = () => {
  const reviewsData = [
    {
      id: 0,
      title: "John Doe",
      designation: "Designation",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 1,
      title: "John Doe",
      designation: "Designation",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 2,
      title: "John Doe",
      designation: "Designation",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
      img: "/images/works/pendfunds.png",
    },
  ];

  return (
    <div className="flex flex-col gap-20 items-center justify-center py-30 max-sm:px-6">
      <h2 className="font-bebas text-white text-17 lg:text-48 leading-0.9 -tracking-3.84 uppercase">
        What People say
      </h2>
      <div className="flex flex-col md:flex-row gap-12 lg:gap-8 lg:mx-20">
        {reviewsData.map((review, reviewIndex) => (
          <div key={reviewIndex} className="flex flex-col gap-7">
            <span className="size-9 lg:size-12">
              <svg
                viewBox="0 0 51 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 26.2882L11.8223 0.899414H21.7065L13.5665 24.1563H20.5436V44.7H0V26.2882ZM28.6835 26.2882L40.5058 0.899414H50.39L42.2501 24.1563H49.2272V44.7H28.6835V26.2882Z"
                  fill="#FCFFF4"
                  fillOpacity="0.3"
                />
              </svg>
            </span>
            <p className="font-bebas text-white text-10 lg:text-14 leading-0.92 -tracking-1.15">
              {review.content}
            </p>
            <div className="flex lg:flex-col justify-between max-sm:items-end">
              <p className="flex gap-2 font-medium text-6.5/snug text-gray-200 -tracking-0.19">
                {review.title}
              </p>
              <p className="flex gap-2 font-medium text-base/snug text-gray-200 -tracking-0.19">
                {review.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button text={"start a project"} icon={"plus"} theme={"primary"} />
    </div>
  );
};
