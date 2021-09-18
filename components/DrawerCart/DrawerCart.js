import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Button,
  VStack,
  Box,
  StackDivider,
  Heading,
  Text,
  Badge,
  DrawerFooter,
} from "@chakra-ui/react";
import { QuantityInput } from "../QuantityInput/QuantityInput";
import React from "react";

function ListItem({ product,handleAddToCart, ...rest }) {
  const { title, description, category, id, image, price, rating, amount } =
    product;
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xs">
        {title}
      </Heading>
      <QuantityInput product={product} handleAddToCart={handleAddToCart} />
    </Box>
  );
}

export const DrawerCart = ({ LineItems, isOpen, onClose, handleGetTotalItems, handleAddToCart }) => {
  console.log(LineItems);
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Your shop cart{" "}
            <Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="green">
              {handleGetTotalItems(LineItems)}
            </Badge>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              {LineItems?.map((lineItem, index) => (
                <ListItem key={index} handleAddToCart={handleAddToCart} product={lineItem} />
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Heading as="h1" size="md" px={10} mt={5}>
              Total : 23948 $
            </Heading>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
