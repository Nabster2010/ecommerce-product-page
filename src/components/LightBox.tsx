import { useState } from "react";
import Thumbnail from "./Thumbnail";

const LightBox = ({ productImages, closeLightBox }: any) => {
  const [imageIndex, setImageIndex] = useState(0);
  const nextImage = () => {
    const lastImage = imageIndex === productImages.length - 1;
    if (lastImage) {
      return setImageIndex(0);
    } else {
      return setImageIndex((prev) => prev + 1);
    }
  };
  const prevImage = () => {
    if (imageIndex === 0) {
      return setImageIndex(productImages.length - 1);
    } else {
      return setImageIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="hidden md:flex fixed inset-0 z-20 overflow-hidden justify-center items-center bg-black/75">
      <div className="mt-8 relative">
        <button
          onClick={closeLightBox}
          className="absolute group top-0 right-0 "
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              className="group-hover:fill-Orange transition"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className="mt-8 md:max-w-md md:rounded-md   md:flex-1 relative">
          <button
            onClick={nextImage}
            className="absolute group top-1/3 bg-white -right-5 w-10 h-10 flex justify-center items-center rounded-full"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:stroke-Orange transition"
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <img
            src={productImages[imageIndex].img}
            className="object-cover rounded-md "
            alt="product image"
          />

          <button
            onClick={prevImage}
            className="absolute group top-1/3 bg-white -left-5 w-10 h-10 flex justify-center items-center rounded-full "
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:stroke-Orange transition"
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className=" my-6 md:flex justify-center items-center gap-4">
            {productImages.map((prod: any, indx: number) => (
              <Thumbnail
                className="h-16 w-16"
                handleClick={() => setImageIndex(indx)}
                active={indx === imageIndex}
                key={indx}
                src={prod.thumb}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
