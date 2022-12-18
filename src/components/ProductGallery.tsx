import { useState } from "react";
import Thumbnail from "./Thumbnail";

const ProductGallery = ({ productImages, openLightBox }: any) => {
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
    <div className=" md:max-w-sm md:rounded-md overflow-hidden md:flex-1 relative">
      <button
        onClick={nextImage}
        className="absolute group md:hidden top-1/2 bg-white right-4 w-10 h-10 flex justify-center items-center rounded-full"
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
        onClick={openLightBox}
        src={productImages[imageIndex].img}
        className="object-cover cursor-pointer md:rounded-md"
        alt="product image"
      />
      <div className="hidden my-6 md:flex justify-center items-center gap-4">
        {productImages.map((prod: any, indx: number) => (
          <Thumbnail
            className="flex-1"
            handleClick={() => setImageIndex(indx)}
            active={indx === imageIndex}
            key={indx}
            src={prod.thumb}
          />
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute group md:hidden top-1/2 bg-white left-4 w-10 h-10 flex justify-center items-center rounded-full "
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
    </div>
  );
};
export default ProductGallery;
