import Card from "@component/Card";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import Grid from "../grid/Grid";
import ProductCardSpedList from "../product-cards/ProductCardSpedList";
import ProductCard5 from "../product-cards/ProductCard5";

const Section4: React.FC = () => {
  return (
    <Box mb="3.75rem">
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12}>
              <CategorySectionHeader
                title="專科列表"
              />

              <Grid container>
                {topRatedList.map((item) => (
                  <Grid item md={3} sm={6} xs={6} key={item.title}>
                    <Link href={item.productUrl}>
                      <a>
                        <ProductCardSpedList {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>

            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const topRatedList = [
  {
    imgUrl: "/assets/images/lists/med.svg",
    title: "Camera",
    rating: 4,
    price: 3300,
    reviewCount: 49,
    productUrl: "/product/d1",
  },
  {
    imgUrl: "/assets/images/lists/tra.svg",
    title: "Shoe",
    rating: 4.75,
    price: 400,
    reviewCount: 20,
    productUrl: "/product/d12",
  },
  {
    imgUrl: "/assets/images/lists/oag.svg",
    title: "Phone",
    rating: 5,
    price: 999,
    reviewCount: 65,
    productUrl: "/product/d14",
  },
  {
    imgUrl: "/assets/images/lists/child.svg",
    title: "Watch",
    rating: 5,
    price: 999,
    reviewCount: 75,
    productUrl: "/product/d16",
  },
  {
    imgUrl: "/assets/images/lists/skin.svg",
    title: "Watch",
    rating: 5,
    price: 999,
    reviewCount: 75,
    productUrl: "/product/d16",
  },
  {
    imgUrl: "/assets/images/lists/face.svg",
    title: "Watch",
    rating: 5,
    price: 999,
    reviewCount: 75,
    productUrl: "/product/d16",
  },
];

export default Section4;
