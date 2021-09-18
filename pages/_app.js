import "../styles/global.css";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CartProvider } from '../hooks/useCart';

const queryClient = new QueryClient();





export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
