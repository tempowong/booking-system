import Box from "@component/Box";
import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import Typography, { H3, H5, Small } from "@component/Typography";
import React, { Fragment } from "react";

const Section1: React.FC = () => {
  return (
    <Fragment>

      <Container pb="2rem">
        <div><img src={"/assets/images/banners/greeting.svg"} style={{ width: '90%' }}></img></div>
      </Container>

    </Fragment>
  );
};

export default Section1;
