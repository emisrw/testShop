import React from "react";
import { Button, useNumberInput, Input, HStack } from "@chakra-ui/react";

export const QuantityInput = ({product, handleAddToCart, ...props}) => {

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: product.amount,
      min: 1,
    //   max: 6,
      precision: 0,
    });


  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack mt={5} maxW="158px">
      <Button onClick={() => handleAddToCart(product)} {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};
