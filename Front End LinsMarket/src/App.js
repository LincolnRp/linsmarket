import React from "react";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
