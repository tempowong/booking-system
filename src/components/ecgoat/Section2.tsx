import Box from "@component/Box";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";
import Grid from "../grid/Grid";

const Section2: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();



  return (
    <Grid item lg={6} xs={12}>
      <img src={"/assets/images/banners/searchBanner.svg"} style={{ width: '100%' }}></img>
    </Grid>
  );
};


export default Section2;
