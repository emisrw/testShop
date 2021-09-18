import React from "react";
import {
  GridItem,
  Box,
  Image,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";

const Item = ({ product, handleAddToCart, ...props }) => {
  const { id, image, title } = product;

  return (
    <GridItem key={id}>
      <Box boxSize="sm" overflow="hidden" p={10}>
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          objectFit="cover"
          src={image}
          alt="Segun Adebayo"
        />
      </Box>
      <Heading as="h2" size="sm" px={10} mt={5}>
        {title}
      </Heading>
      <Center>
        <Button
          mt={5}
          colorScheme="blue"
          variant="solid"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </Button>
      </Center>
    </GridItem>
  );
};

export default Item;
