import React from "react";

import {
  ChakraProvider,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <div style={container}>
        <Tabs style={tabstyle}>
          <TabList>
            <Tab>Add contact</Tab>
            <Tab>All contacts</Tab>
            <Tab>Calculator</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Add contact</p>
            </TabPanel>
            <TabPanel>
              <p>All contacts</p>
            </TabPanel>
            <TabPanel>
              <p>Calculator</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </ChakraProvider>
  );
};

const container = {
  width: "100%",
  height: "100%",
  padding: 10,
  backgroundColor: "#262626",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const tabstyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "#ebebeb",
};

export default App;
