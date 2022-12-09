import Box from "@component/Box";
import HoverBox from "@component/HoverBox";
import NextImage from "next/image";
import React from "react";
import { CSSProperties } from "styled-components";

export interface ProductCard4Props {
  className?: string;
  style?: CSSProperties;
  imgUrl: string;
  title: string;
}

const ProductCardSpedList: React.FC<ProductCard4Props> = ({
  imgUrl,
  title,
}) => {
  return (
    <Box>
      <HoverBox mb="1rem" mx="auto" borderRadius={8}>
        <NextImage
          src={imgUrl}
          width={100}
          height={100}
          layout="responsive"
          alt={title}
        />
      </HoverBox>
    </Box>
  );
};

export default ProductCardSpedList;
