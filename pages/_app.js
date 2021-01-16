import * as React from "react";

import { Box, ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
