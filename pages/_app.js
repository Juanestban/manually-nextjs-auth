import { useState, useEffect } from "react";
import { ChakraProvider, Stack, Center, Spinner } from "@chakra-ui/react";
import AuthProvider from "../contexts/AuthProvider";

export default function App({ Component, pageProps }) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <ChakraProvider>
      <Stack minHeight="100vh">
        <AuthProvider Component={Component} pageProps={pageProps} />
      </Stack>
    </ChakraProvider>
  ) : (
    <Center h="100vh">
      <Spinner size="lg" />
    </Center>
  );
}
