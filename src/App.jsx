import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import TabsComponent from "./components/TabsComponent";

import "../assets/css/fonts.css";

const App = () => {
  return (
    <ChakraProvider>
      <TabsComponent />
    </ChakraProvider>
  );
};

export default App;
