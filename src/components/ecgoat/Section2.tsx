import Box from "@component/Box";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";

const Section2: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();



  return (
    <div>
      <img src={"/assets/images/banners/searchBanner.svg"} style={{ width: '100%' }}></img>
    </div>
  );
};

const productList = [
  {
    imgUrl: "/assets/images/products/flash-1.png",
  },
  {
    imgUrl: "/assets/images/products/flash-2.png",
  },
  {
    imgUrl: "/assets/images/products/flash-3.png",
  },
  {
    imgUrl: "/assets/images/products/flash-4.png",
  },
  {
    imgUrl: "/assets/images/products/flash-1.png",
  },
  {
    imgUrl: "/assets/images/products/flash-2.png",
  },
  {
    imgUrl: "/assets/images/products/flash-3.png",
  },
  {
    imgUrl: "/assets/images/products/flash-4.png",
  },
  {
    imgUrl: "/assets/images/products/flash-1.png",
  },
  {
    imgUrl: "/assets/images/products/flash-2.png",
  },
];

export default Section2;
