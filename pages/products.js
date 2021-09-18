import {
  Center,
  Container,
  Grid,
  Spinner,
  useDisclosure,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "react-query";
import { DrawerCart } from "../components/DrawerCart/DrawerCart";
import Item from "../components/Item/Item";
import Layout, { siteTitle } from "../components/layout";
import { getProducts } from "./api/getProducts";
import { useCart } from '../hooks/useCart';


function Products({ products }) {
  const [cartItems, setCartItems] = useState([]);

  const toast = useToast()
  const { data, isLoading } = useQuery("products", getProducts, {
    initialData: products,
  });

  const test = useCart();
  console.log(test);
  const getTotalItems = (items) => items.reduce((ack,item) => ack+item.amount, 0);
  console.log(cartItems);
  const handleAddToCart = (clickedItem) => {


    toast({
      title: "Product added to cart.",
      description: "Yeah",
      status: "success",
      duration: 1000,
      isClosable: true,
    })


    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev?.find((item) => item?.id === clickedItem?.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item?.id === clickedItem?.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = () => null;

  const cartDrawer = useDisclosure();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container maxW="container.xl">
        <Heading as="h1" size="xl" px={10} mt={5}>
          Products
        </Heading>
        <Button variant="outline" size="xs" onClick={() => cartDrawer.onOpen()}>
          Show Drawer
        </Button>

        {isLoading ? (
          <Center w="full" py={6}>
            <Spinner size="xl" />
          </Center>
        ) : (
          <Grid
            templateColumns={{
              base: "full",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={15}
            spacing={25}
          >
            {data?.map((product, index) => (
              <Item
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Item>
            ))}
          </Grid>
        )}
      </Container>
      <DrawerCart
        LineItems={cartItems}
        handleGetTotalItems={getTotalItems}
        handleAddToCart={handleAddToCart}
        isOpen={cartDrawer.isOpen}
        onClose={cartDrawer.onClose}
      />
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const products = await getProducts();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
}

export default Products;
